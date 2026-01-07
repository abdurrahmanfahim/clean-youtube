# Clean YouTube

A modern, clean YouTube playlist viewer built with React and Material-UI. Browse YouTube playlists without distractions, manage favorites, and enjoy a seamless video watching experience.

## ✨ Features

### 🎵 Playlist Management
- **Add Playlists**: Import YouTube playlists using playlist ID or full YouTube URL
- **Smart URL Processing**: Automatically extracts playlist ID from YouTube URLs
- **Persistent Storage**: All playlists saved locally using browser storage
- **Recent Playlists**: Keep track of recently viewed playlists (last 10)

### ❤️ Favorites System
- **Add to Favorites**: Mark playlists as favorites for quick access
- **Dedicated Favorites Page**: View all your favorite playlists in one place
- **One-Click Management**: Easy add/remove favorites with heart icon

### 🎥 Video Player
- **Embedded YouTube Player**: Watch videos directly in the app
- **Clean Interface**: Distraction-free viewing experience
- **Video Details**: Display video title, description, and publish date
- **Seamless Navigation**: Easy navigation between playlist videos

### 🎨 User Experience
- **Dark/Light Theme**: Toggle between dark and light modes
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Material-UI Components**: Modern, accessible interface
- **Glass Morphism Navbar**: Beautiful translucent navigation bar
- **Smooth Animations**: Hover effects and transitions

### 🔧 Technical Features
- **Context API**: Efficient state management across components
- **React Router**: Client-side routing for smooth navigation
- **Local Storage**: Persistent data without external database
- **Error Handling**: Graceful error handling for API failures
- **Loading States**: User feedback during data fetching

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- YouTube Data API v3 key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd clean-youtube
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` and add your YouTube API key:
   ```
   VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Getting YouTube API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable YouTube Data API v3
4. Create credentials (API Key)
5. Copy the API key to your `.env` file

## 📖 User Guide

### Adding a Playlist

1. **Click "Add Playlist" button** in the navigation bar
2. **Enter playlist information** in the dialog:
   - Full YouTube playlist URL: `https://youtube.com/playlist?list=PL_XxuZqN0xVDr08QgQHljCecWtA4jBLnS`
   - Or just the playlist ID: `PL_XxuZqN0xVDr08QgQHljCecWtA4jBLnS`
3. **Click "Add Playlist"** to import
4. **Wait for processing** - the app will fetch all playlist details

### Navigating the App

- **Home Page** (`/`): View all your imported playlists
- **Playlist Page** (`/playlist/:id`): Browse videos in a specific playlist
- **Player Page** (`/player/:playlistId/:videoId`): Watch individual videos
- **Favorites Page** (`/favorites`): Access your favorite playlists

### Managing Favorites

- **Add to Favorites**: Click the heart outline icon on any playlist card
- **Remove from Favorites**: Click the filled heart icon to remove
- **View Favorites**: Click the heart icon in the navigation bar

### Theme Switching

- **Toggle Theme**: Click the sun/moon icon in the navigation bar
- **Automatic Persistence**: Your theme preference is saved automatically

### Tips for Best Experience

- **Playlist URLs**: Both full URLs and playlist IDs work
- **Storage**: All data is stored locally - no account needed
- **Performance**: Recently viewed playlists load instantly
- **Mobile**: Fully responsive design works on all devices

## 🛠️ Built With

- **React 19** - Frontend framework
- **Material-UI (MUI)** - UI component library
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **Vite** - Build tool and development server
- **YouTube Data API v3** - Playlist and video data

## 📁 Project Structure

```
src/
├── api/                 # YouTube API integration
├── components/          # Reusable UI components
│   ├── navbar/         # Navigation bar
│   ├── playlist-card-item/ # Playlist/video cards
│   └── playlist-form/  # Add playlist dialog
├── contexts/           # React Context providers
│   ├── PlaylistContext.jsx # Playlist state management
│   └── ThemeContext.jsx    # Theme state management
├── hooks/              # Custom React hooks
├── pages/              # Route components
│   ├── home-page/      # Main playlist grid
│   ├── playlist-items-page/ # Individual playlist view
│   ├── player-page/    # Video player
│   ├── favorites-page/ # Favorites collection
│   └── not-found/      # 404 page
├── utils/              # Utility functions
└── App.jsx             # Main app component
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**AR Fahim**
- GitHub: [@abdurrahmanfahim](https://github.com/abdurrahmanfahim)

---

*Built with ❤️ using React and Material-UI*
