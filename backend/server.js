const express = require('express');
const bodyParser = require('body-parser');
const smsRoutes = require('./routes/sms');
const admin = require('firebase-admin');
require('dotenv').config();

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g,'\n')
  })
});

const app = express();
app.use(bodyParser.json());
app.use(require('cors')());
app.use('/api/sms', smsRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
