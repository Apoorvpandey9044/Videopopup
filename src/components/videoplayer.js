import React, { useState, useEffect } from 'react';

const VideoPlayer = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // Show popup after 5 seconds

    const hideTimer = setTimeout(() => {
      setShowPopup(false);
    }, 10000); // Hide popup after 10 seconds

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <video controls autoPlay style={{ width: '100%' }}>
        <source src="https://player.vimeo.com/external/2759477.sd.mp4?s=34f31f05bc3b9fbb9920ad7a83281d2f5b107ac5&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {showPopup && (
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '20px',
          borderRadius: '8px',
          zIndex: 1000
        }}>
          <p>Download our new game now!</p>
          <button style={{ marginTop: '10px' }}>Download</button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
