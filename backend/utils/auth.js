const axios = require('axios');

let accessToken = ''; // Cache token

async function getToken() {
  if (accessToken) return accessToken;

  const res = await axios.post('http://20.244.56.144/evaluation-service/auth', {
    email: 'akarshsaklani222@gmail.com',
    name: 'akarsh saklani',            // ✅ Added
    rollNo: '2218259',                 // ✅ Correct key
    accessCode: 'QAhDUr',              // ✅ Must match your received accessCode
    clientID: 'e00ca2b9-34d5-41a4-97a4-0fb72c689dfa',
    clientSecret: 'XDfYJjqkBGBHyTGh'
  });

  accessToken = res.data.access_token;
  console.log('AUTH RESPONSE:', res.data); // Optional: For debug
  return accessToken;
}

module.exports = { getToken };
