const axios = require('axios');

exports.triggerAlert = async ({ eventId, fraudScore, sender, text }) => {
  try {
    await axios.post(process.env.ADK_ENDPOINT, { eventId, fraudScore, sender, text });
  } catch (e) {
    console.warn('ADK trigger failed', e.message);
  }
};
