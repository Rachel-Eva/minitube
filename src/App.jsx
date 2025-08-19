import React, { useState } from "react";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [query, setQuery] = useState("home"); // default
  const [searchTerm, setSearchTerm] = useState("");

  const allVideos = {
    home: [
      { 
        id: "L_jWHffIx5E", 
        title: "Ariana Grande - 7 rings (Official Video)",
        channel: "Ariana Grande",
        views: "1.2B views",
        timestamp: "5 years ago",
        duration: "3:02",
        thumbnail: `https://img.youtube.com/vi/L_jWHffIx5E/maxresdefault.jpg`
      },
      { 
        id: "CevxZvSJLk8", 
        title: "Katy Perry - Roar (Official)",
        channel: "Katy Perry",
        views: "3.4B views",
        timestamp: "10 years ago",
        duration: "3:42",
        thumbnail: `https://img.youtube.com/vi/CevxZvSJLk8/maxresdefault.jpg`
      },
      { 
        id: "uelHwf8o7_U", 
        title: "Rihanna - Diamonds (Official Music Video)",
        channel: "Rihanna",
        views: "1.8B views",
        timestamp: "11 years ago",
        duration: "3:45",
        thumbnail: `https://img.youtube.com/vi/uelHwf8o7_U/maxresdefault.jpg`
      },
      { 
        id: "kOkQ4T5WO9E", 
        title: "Taylor Swift - Shake It Off",
        channel: "Taylor Swift",
        views: "3.2B views",
        timestamp: "9 years ago",
        duration: "3:39",
        thumbnail: `https://img.youtube.com/vi/kOkQ4T5WO9E/maxresdefault.jpg`
      },
      { 
        id: "pRpeEdMmmQ0", 
        title: "Shakira - Waka Waka (This Time for Africa)",
        channel: "Shakira",
        views: "3.8B views",
        timestamp: "13 years ago",
        duration: "3:22",
        thumbnail: `https://img.youtube.com/vi/pRpeEdMmmQ0/maxresdefault.jpg`
      },
      { 
        id: "3tmd-ClpJxA", 
        title: "Maroon 5 - Girls Like You ft. Cardi B",
        channel: "Maroon5VEVO",
        views: "4.1B views",
        timestamp: "5 years ago",
        duration: "3:55",
        thumbnail: `https://img.youtube.com/vi/3tmd-ClpJxA/maxresdefault.jpg`
      }
    ],
    trending: [
      { 
        id: "pRpeEdMmmQ0", 
        title: "Shakira - Waka Waka (This Time for Africa)",
        channel: "Shakira",
        views: "3.8B views",
        timestamp: "13 years ago",
        duration: "3:22",
        thumbnail: `https://img.youtube.com/vi/pRpeEdMmmQ0/maxresdefault.jpg`
      },
      { 
        id: "3tmd-ClpJxA", 
        title: "Maroon 5 - Girls Like You ft. Cardi B",
        channel: "Maroon5VEVO",
        views: "4.1B views",
        timestamp: "5 years ago",
        duration: "3:55",
        thumbnail: `https://img.youtube.com/vi/3tmd-ClpJxA/maxresdefault.jpg`
      },
      { 
        id: "60ItHLz5WEA", 
        title: "Alan Walker - Faded",
        channel: "Alan Walker",
        views: "3.5B views",
        timestamp: "7 years ago",
        duration: "3:32",
        thumbnail: `https://img.youtube.com/vi/60ItHLz5WEA/maxresdefault.jpg`
      }
    ],
    subscriptions: [
      { 
        id: "60ItHLz5WEA", 
        title: "Alan Walker - Faded",
        channel: "Alan Walker",
        views: "3.5B views",
        timestamp: "7 years ago",
        duration: "3:32",
        thumbnail: `https://img.youtube.com/vi/60ItHLz5WEA/maxresdefault.jpg`
      },
      { 
        id: "JGwWNGJdvx8", 
        title: "Ed Sheeran - Shape of You [Official Video]",
        channel: "Ed Sheeran",
        views: "5.9B views",
        timestamp: "6 years ago",
        duration: "3:53",
        thumbnail: `https://img.youtube.com/vi/JGwWNGJdvx8/maxresdefault.jpg`
      }
    ],
    library: [
      { 
        id: "fRh_vgS2dFE", 
        title: "Justin Bieber - Sorry (PURPOSE : The Movement)",
        channel: "Justin Bieber",
        views: "4.2B views",
        timestamp: "8 years ago",
        duration: "3:20",
        thumbnail: `https://img.youtube.com/vi/fRh_vgS2dFE/maxresdefault.jpg`
      },
      { 
        id: "2Vv-BfVoq4g", 
        title: "Ed Sheeran - Perfect (Official Music Video)",
        channel: "Ed Sheeran",
        views: "4.8B views",
        timestamp: "6 years ago",
        duration: "4:23",
        thumbnail: `https://img.youtube.com/vi/2Vv-BfVoq4g/maxresdefault.jpg`
      }
    ]
  };

  // Filter videos
  const videos = allVideos[query].filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`app-wrapper ${isMenuOpen ? "menu-open" : ""}`}>
      {/* Sidebar */}
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="sidebar-section">
          <ul>
            <li className="sidebar-item active" onClick={() => setQuery("home")}>
              <span className="sidebar-icon">🏠</span>
              <span>Home</span>
            </li>
            <li className="sidebar-item" onClick={() => setQuery("trending")}>
              <span className="sidebar-icon">🔥</span>
              <span>Trending</span>
            </li>
            <li className="sidebar-item" onClick={() => setQuery("subscriptions")}>
              <span className="sidebar-icon">📺</span>
              <span>Subscriptions</span>
            </li>
          </ul>
        </div>
        
        <div className="sidebar-section">
          <h3 className="sidebar-title">Library</h3>
          <ul>
            <li className="sidebar-item" onClick={() => setQuery("library")}>
              <span className="sidebar-icon">📚</span>
              <span>Library</span>
            </li>
            <li className="sidebar-item">
              <span className="sidebar-icon">⏱️</span>
              <span>History</span>
            </li>
            <li className="sidebar-item">
              <span className="sidebar-icon">👍</span>
              <span>Liked videos</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Topbar */}
      <header className="topbar">
        <div className="left">
          <div
            className="hamburger-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="logo">
            <span className="logo-icon">▶</span>
            <span className="logo-text">MiniTube</span>
          </div>
        </div>
        <div className="center">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search"
              className="search-bar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-btn">
              <span className="search-icon">🔍</span>
            </button>
          </div>
        </div>
        <div className="right">
          <button className="icon-btn">
            <span>📹</span>
          </button>
          <button className="icon-btn">
            <span>🔔</span>
          </button>
          <button className="icon-btn profile-btn">
            <span>👤</span>
          </button>
        </div>
      </header>

      {/* Video Grid */}
      <main className={`main-content ${isMenuOpen ? "shifted" : ""}`} onClick={() => setIsMenuOpen(false)}>
        <div className="video-grid">
          {videos.length > 0 ? (
            videos.map((video) => (
              <div key={video.id} className="video-card">
                <div className="thumbnail-container">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="video-thumbnail"
                    onError={(e) => {
                      e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                    }}
                  />
                  <div className="video-duration">{video.duration}</div>
                </div>
                <div className="video-info">
                  <div className="video-avatar">
                    <span>👤</span>
                  </div>
                  <div className="video-details">
                    <h3 className="video-title">{video.title}</h3>
                    <p className="video-channel">{video.channel}</p>
                    <p className="video-stats">
                      {video.views} • {video.timestamp}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <span className="no-results-icon">🔍</span>
              <h3>No videos found</h3>
              <p>Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
