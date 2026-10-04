export default async function handler(req, res) {
  // CORS & Method Check
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, phone } = req.body || {};

    if (!email || !phone) {
      return res.status(400).json({ error: 'Email and phone are required.' });
    }

    // Securely forward submission to Tally API or database if TALLY_API_KEY environment variable is configured
    const tallyApiKey = process.env.TALLY_API_KEY;
    const tallyFormId = process.env.TALLY_FORM_ID || 'lbPeGN';

    if (tallyApiKey) {
      try {
        await fetch(`https://api.tally.so/forms/${tallyFormId}/submissions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tallyApiKey}`
          },
          body: JSON.stringify({ email, phone })
        });
      } catch (err) {
        console.error('Failed to post to Tally API:', err);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Waitlist submission received successfully.'
    });
  } catch (error) {
    console.error('Waitlist API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
