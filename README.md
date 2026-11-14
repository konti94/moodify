# Moodify 🎵💭

Moodify is a simple web application that provides **music videos and quotes** based on the user's mood. Users select an emoji that represents their mood, and the app fetches a **matching YouTube video and an inspiring quote** from external APIs.

## 🌍 Live Demo
[Visit Moodify](https://moodify-xa8f.onrender.com/)

## 🚀 Features
- Select a mood using emoji buttons
- Fetches a **music video** from YouTube related to the selected mood
- Displays a **motivational quote** based on the user's emotion
- Built with **Vue 3 (Options API), TailwindCSS, Node.js (Express), and Axios**

## 🛠️ Tech Stack
### **Frontend:**
- Vue 3 (Options API)
- Vite
- Vue Router
- TailwindCSS
- Axios

### **Backend:**
- Node.js
- Express.js
- Axios
- dotenv

## 📂 Project Structure
```
moodify/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── apiController.js
│   │   ├── routes/
│   │   │   └── apiRoutes.js
│   │   ├── services/
│   │   │   ├── musicService.js
│   │   │   ├── quoteService.js
│   │   ├── app.js
│   │   ├── index.js
│   ├── .env
│   ├── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── EmojiSelector.vue
│   │   │   ├── MoodResult.vue
│   │   ├── views/
│   │   │   ├── HomeView.vue
│   │   │   ├── ResultView.vue
│   │   ├── router/
│   │   │   ├── index.js
│   │   ├── App.vue
│   │   ├── main.js
│   ├── index.css
│   ├── package.json
│
├── package.json
├── README.md
└── .gitignore
```

## ⚡ Installation & Setup
### Prerequisites
- Node.js **26.13.1** (LTS) or newer 26.x — the version is pinned in `.nvmrc`, so with nvm just run `nvm use`

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/konti94/moodify.git
cd moodify
```

### 2️⃣ Install Dependencies
#### Backend:
```bash
cd backend
npm install
```

#### Frontend:
```bash
cd ../frontend
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root with the following:
```env
YOUTUBE_SEARCH_BASE_URL=https://www.googleapis.com/youtube/v3/search
YOUTUBE_API_KEY=your_youtube_api_key
QUOTES_BASE_URL=http://api.quotable.io/quotes/random
VITE_API_BASE_URL=http://localhost:8000
PORT=8000
```

### 4️⃣ Run the Application
Run both frontend and backend simultaneously using `concurrently`:
```bash
npm run dev
```

## 🔗 API Endpoints
### 1️⃣ Get Music and Quote (Combined Response)
**GET `/api/music-with-quote?mood={mood}`**
```json
{
  "music": [
    {
      "title": "Happy Vibes",
      "videoId": "abcd1234",
      "thumbnail": "https://example.com/thumbnail.jpg"
    }
  ],
  "quote": {
    "content": "Happiness is a journey, not a destination.",
    "author": "Unknown"
  }
}
```

### 2️⃣ Get Music Only
**GET `/api/music?mood={mood}`**

### 3️⃣ Get Quote Only
**GET `/api/quote?mood={mood}`**
