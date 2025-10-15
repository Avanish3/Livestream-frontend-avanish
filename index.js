
function App() {
  const [rtspUrl, setRtspUrl] = React.useState("");
  const [videoSrc, setVideoSrc] = React.useState("");

  const handlePlay = () => {
    if (rtspUrl.trim() === "") {
      alert("Please enter RTSP URL!");
    } else {
      setVideoSrc("https://www.w3schools.com/html/mov_bbb.mp4");
      alert(`Simulating RTSP Stream: ${rtspUrl}`);
    }
  };

  return (
    <div>
      <h2>🎥 Live Stream Player</h2>
      <input
        type="text"
        placeholder="Enter RTSP URL"
        value={rtspUrl}
        onChange={(e) => setRtspUrl(e.target.value)}
        style={{ padding: "8px", width: "60%" }}
      />
      <button onClick={handlePlay} style={{ marginLeft: "10px", padding: "8px" }}>
        Play
      </button>

      {videoSrc && (
        <div style={{ marginTop: "20px" }}>
          <video width="500" controls autoPlay>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
