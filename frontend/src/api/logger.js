import axios from 'axios';

export async function log(level, pkg, message) {
  try {
    const tokenRes = await axios.post('http://20.244.56.144/evaluation-service/auth', {
      email: "akarshsaklani222@gmail.com",
      rollNumber: "2218259",
      clientId: "e00ca2b9-34d5-41a4-97a4-0fb72c689dfa",
      clientSecret: "XDfYJjqkBGBHyTGh"
    });

    const token = tokenRes.data.accessToken;

    await axios.post(
      'http://20.244.56.144/evaluation-service/logs',
      {
        stack: 'frontend',
        level,
        package: pkg,
        message
      },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
  } catch (err) {
    console.error('Logging error:', err.message);
  }
}
