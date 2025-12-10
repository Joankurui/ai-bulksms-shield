const {PredictionServiceClient} = require('@google-cloud/aiplatform');
const client = new PredictionServiceClient();

exports.classifyText = async (text) => {
  // Replace with deployed Vertex AI endpoint
  return {
    fraud_score: Math.random(), // placeholder
    tags: ['fake_mpesa', 'urgent']
  };
};
