const axios = require('axios');

exports.explainText = async (text, tags) => {
  try {
    const resp = await axios.post(process.env.GENKIT_ENDPOINT, { text, tags });
    return resp.data.explanation;
  } catch {
    return `Possible fraud detected (tags: ${tags.join(', ')})`;
  }
};
