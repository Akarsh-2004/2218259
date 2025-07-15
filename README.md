# 🔗 URL Shortener Web App

A simple and responsive full-stack URL shortening service built with Node.js, Express, MongoDB, React, and Material UI. This application allows users to shorten long URLs, optionally define custom shortcodes, set validity durations, and view basic statistics of shortened URLs.

## 🛠 Features

* ✅ Shorten long URLs with or without custom shortcodes
* ✅ Set optional expiration time (in minutes)
* ✅ View all shortened URLs and basic analytics (clicks, creation time, expiry)
* ✅ Material UI-based responsive frontend
* ✅ Express.js + MongoDB backend with logging middleware

## 📦 Tech Stack

| Frontend | Backend |
|----------|---------|
| React | Node.js + Express |
| Material UI (MUI) | MongoDB with Mongoose |
| React Router DOM | Axios |
| Axios | Logging Middleware (custom) |

## 📂 Project Structure

```
.
├── frontend/                    # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── backend/                    # Express backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── Logging_Middleware/
│   │   └── middleware.js
│   ├── utils/
│   │   └── auth.js
│   ├── index.js
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

* Node.js & npm
* MongoDB running locally or via cloud (e.g. MongoDB Atlas)

### 🔧 Backend Setup

1. Navigate to the server directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create or update the `utils/auth.js` file with your access token logic:
   ```javascript
   // utils/auth.js
   async function getToken() {
     // Return access token or use an API call
     return "your_token_here";
   }
   
   module.exports = { getToken };
   ```

4. Set up environment variables (create `.env` file):
   ```env
   MONGODB_URI=mongodb://localhost:27017/urlshortener
   PORT=3000
   BASE_URL=http://localhost:3000
   ```

5. Start the backend server:
   ```bash
   node index.js
   ```

The server runs at `http://localhost:3000`

<img width="1918" height="1015" alt="Screenshot 2025-07-15 104933" src="https://github.com/user-attachments/assets/baf46cdb-d374-4bdc-b4ec-f5565116a0d3" />

<img width="1912" height="1013" alt="Screenshot 2025-07-15 105356" src="https://github.com/user-attachments/assets/122e1cd4-66ee-4f43-8e3d-3e578eab44fd" />

<img width="1919" height="1019" alt="Screenshot 2025-07-15 105211" src="https://github.com/user-attachments/assets/4670e3dd-261a-4f79-a1f0-52565b4e7022" />


### 🖼 Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React app:
   ```bash
   npm run dev
   ```

The frontend runs at `http://localhost:3000` (or `5173` if using Vite)

## 📤 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/shorturls` | Shorten a new URL |
| GET | `/shorturls` | Get all shortened URLs |
| GET | `/shorturls/:code/stats` | Get stats for a specific URL |

### 📋 Sample POST Body

```json
{
  "originalUrl": "https://example.com/very-long-url",
  "shortcode": "exmpl",     // optional
  "validity": 10            // in minutes (optional)
}
```

### Sample Response

```json
{
  "success": true,
  "data": {
    "originalUrl": "https://example.com/very-long-url",
    "shortcode": "exmpl",
    "shortUrl": "http://localhost:3000/exmpl",
    "createdAt": "2024-01-15T10:30:00Z",
    "expiresAt": "2024-01-15T10:40:00Z",
    "clicks": 0
  }
}
```

## 📈 Statistics

The Statistics page shows:
* All URLs you have shortened
* Created & expiry time
* Number of clicks
* Click metadata (referrer, time, location — if available)

## 🛡 Logging

All backend requests are logged using a custom middleware and posted to an external evaluation/logging API with bearer token authentication.

## 🔒 Security Features

* Input validation for URLs and shortcodes
* Rate limiting to prevent abuse
* Expiration time enforcement
* Sanitized user inputs

## 📝 Usage Examples

### Creating a Short URL

```javascript
// Using fetch API
const response = await fetch('/shorturls', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    originalUrl: 'https://example.com/very-long-url',
    shortcode: 'custom', // optional
    validity: 60 // expires in 60 minutes
  })
});

const data = await response.json();
console.log(data.shortUrl); // http://localhost:3000/custom
```

### Getting URL Statistics

```javascript
const stats = await fetch('/shorturls/custom/stats');
const data = await stats.json();
console.log(data);
```

## 🚧 Development

### Running in Development Mode

1. Start MongoDB service
2. Run backend: `cd server && npm run dev`
3. Run frontend: `cd client && npm start`

### Environment Variables

Create a `.env` file in the server directory:

```env
MONGODB_URI=mongodb://localhost:27017/urlshortener
PORT=3000
BASE_URL=http://localhost:3000
NODE_ENV=development
LOG_API_ENDPOINT=https://your-logging-api.com/logs
```
