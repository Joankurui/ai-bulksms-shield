const vertex = require('../services/vertex');
const genkit = require('../services/genkit');
const adk = require('../services/adk');
const admin = require('firebase-admin');
const db = admin.firestore();

exports.analyzeSMS = async (req, res) => {
  try {
    const { text, sender, raw } = req.body;
    if (!text) return res.status(400).json({ error: 'text missing' });

    const prediction = await vertex.classifyText(text);
    const fraudScore = prediction.fraud_score || 0;
    const explanation = await genkit.explainText(text, prediction.tags || []);

    const event = {
      text,
      sender,
      raw: raw || null,
      fraudScore,
      tags: prediction.tags || [],
      explanation,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    };

    const doc = await db.collection('events').add(event);

    const threshold = parseFloat(process.env.ALERT_THRESHOLD || '0.7');
    if (fraudScore >= threshold) {
      await adk.triggerAlert({ eventId: doc.id, fraudScore, sender, text });
    }

    return res.json({ ok: true, eventId: doc.id, fraudScore, explanation });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'server error' });
  }
};
