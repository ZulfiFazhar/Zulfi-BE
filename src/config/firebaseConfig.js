const admin = require('firebase-admin');
const credentials = require('../../creds.json');

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});

const db = admin.firestore();

module.exports = { db };
