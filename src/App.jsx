import React, { useState } from "react";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [query, setQuery] = useState("home"); // default
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [commentsByVideo, setCommentsByVideo] = useState({});

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

  // Build unique videos list for suggestions (no duplicates by id)
  const uniqueVideos = React.useMemo(() => {
    const map = new Map();
    Object.values(allVideos).flat().forEach((v) => {
      if (!map.has(v.id)) map.set(v.id, v);
    });
    return Array.from(map.values());
  }, []);

  // Filter videos for grid view
  const videos = allVideos[query].filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const suggestionsFor = (currentId) =>
    uniqueVideos.filter(v => v.id !== currentId).slice(0, 12);

  const addComment = (videoId, text) => {
    if (!text.trim()) return;
    setCommentsByVideo((prev) => {
      const existing = prev[videoId] || [];
      return { ...prev, [videoId]: [{ id: Date.now(), author: "You", text: text.trim() }, ...existing] };
    });
  };

  return (
    <div className={`app-wrapper ${isMenuOpen ? "menu-open" : ""}`}>
      {/* Sidebar */}
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="sidebar-section">
          <ul>
          <li 
  className={`sidebar-item ${query === "home" ? "active" : ""}`} 
  onClick={() => { setQuery("home"); setSelectedVideo(null); }}
>
  <span className="sidebar-icon">🏠</span>
  <span>Home</span>
</li>

<li 
  className={`sidebar-item ${query === "trending" ? "active" : ""}`} 
  onClick={() => { setQuery("trending"); setSelectedVideo(null); }}
>
  <span className="sidebar-icon">🔥</span>
  <span>Trending</span>
</li>

<li 
  className={`sidebar-item ${query === "subscriptions" ? "active" : ""}`} 
  onClick={() => { setQuery("subscriptions"); setSelectedVideo(null); }}
>
  <span className="sidebar-icon">📺</span>
  <span>Subscriptions</span>
</li>

<li 
  className={`sidebar-item ${query === "library" ? "active" : ""}`} 
  onClick={() => { setQuery("library"); setSelectedVideo(null); }}
>
  <span className="sidebar-icon">📚</span>
  <span>Library</span>
</li>
          </ul>
        </div>
        
        <div className="sidebar-section">
          <h3 className="sidebar-title">Library</h3>
          <ul>
            <li className="sidebar-item" onClick={() => { setQuery("library"); setSelectedVideo(null); }}>
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
          <div className="logo" onClick={() => {setQuery("home");setSelectedVideo(null)}}>
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

      {/* Content */}
      <main className={`main-content ${isMenuOpen ? "shifted" : ""}`} onClick={() => setIsMenuOpen(false)}>
        {selectedVideo ? (
          <div className="watch-layout">
            <div className="watch-left">
              <div className="player-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h1 className="watch-title">{selectedVideo.title}</h1>
              <div className="watch-meta">
                <div className="watch-channel-row">
                  <div className="video-avatar"><span>👤</span></div>
                  <div className="channel-info">
                    <div className="channel-name">{selectedVideo.channel}</div>
                    <div className="watch-stats-small">{selectedVideo.views} • {selectedVideo.timestamp}</div>
                  </div>
                  <div className="watch-actions">
                    <button className="chip-btn">👍 Like</button>
                    <button className="chip-btn">Share</button>
                    <button className="chip-btn" onClick={() => setSelectedVideo(null)}>⬅ Back</button>
                  </div>
                </div>
              </div>

              <div className="comments-section">
                <h3 className="comments-title">Comments</h3>
                <CommentComposer onSubmit={(text) => addComment(selectedVideo.id, text)} />
                <CommentsList comments={commentsByVideo[selectedVideo.id] || []} />
              </div>
            </div>

            <aside className="watch-right">
              {suggestionsFor(selectedVideo.id).map((s) => (
                <div key={s.id} className="suggestion-item" onClick={() => setSelectedVideo(s)}>
                  <div className="suggestion-thumb-wrap">
                    <img src={s.thumbnail} alt={s.title} onError={(e) => { e.target.src = `https://img.youtube.com/vi/${s.id}/hqdefault.jpg`; }} />
                    <div className="video-duration">{s.duration}</div>
                  </div>
                  <div className="suggestion-info">
                    <div className="suggestion-title">{s.title}</div>
                    <div className="suggestion-meta">{s.channel} • {s.views}</div>
                  </div>
                </div>
              ))}
            </aside>
          </div>
        ) : (
          <div className="video-grid">
            {videos.length > 0 ? (
              videos.map((video) => (
                <div key={video.id} className="video-card" onClick={() => setSelectedVideo(video)}>
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
        )}
      </main>
    </div>
  );
}

function CommentComposer({ onSubmit }) {
  const [text, setText] = useState("");
  return (
    <div className="comment-composer">
      <div className="comment-avatar">👤</div>
      <div className="comment-input-wrap">
        <input 
          className="comment-input" 
          placeholder="Add a comment..." 
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') { onSubmit(text); setText(""); } }}
        />
        <div className="comment-actions">
          <button className="chip-btn" onClick={() => { setText(""); }}>Cancel</button>
          <button className="chip-btn primary" onClick={() => { onSubmit(text); setText(""); }}>Comment</button>
        </div>
      </div>
    </div>
  );
}

function CommentsList({ comments }) {
  if (!comments.length) {
    return <p className="no-comments">Be the first to comment</p>;
  }
  return (
    <div className="comments-list">
      {comments.map((c) => (
        <div key={c.id} className="comment-item">
          <div className="comment-avatar">👤</div>
          <div className="comment-body">
            <div className="comment-author">{c.author}</div>
            <div className="comment-text">{c.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
