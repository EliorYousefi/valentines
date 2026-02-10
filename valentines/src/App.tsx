import school from './assets/school.jpg'
import smoke from './assets/smoke.jpg'
import strong from './assets/strong.jpg'
import suit from './assets/suit.jpg'
import pic from './assets/pic.jpg'
import './App.css'
import { useState } from 'react'

const noTexts = [
  "No",
  "Are you sure?",
  "Really??",
  "Come on 😭",
  "100%??!???!?!",
  "PLEASE",
  "😡",
  "💔"
];

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [position, setPosition] = useState({ x: 55, y: 55 });
  const [showPopup, setShowPopup] = useState(false);

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);

    setPosition({
      x: 30 + Math.random() * 40,
      y: 45 + Math.random() * 20,
    });
  };

  const scale = Math.max(1 - noCount * 0.1, 0.35);

  return (
    <div className="container">
      <img src={school} className="school" width={150} height={150} />
      <img src={smoke} className="smoke" width={150} height={150} />
      <a></a>
      <img src={strong} className="strong" width={250} height={150} />
      <img src={suit} className="suit" width={150} height={150} />
      <h1>Will you be my Valentine? 💘</h1>

      <div className="play-area">
        <button className="yes" onClick={() => setShowPopup(true)}>
          YES 💖
        </button>

        <button
          className="no"
          onClick={handleNoClick}
          style={{
            transform: `scale(${scale})`,
            left: `${position.x}%`,
            top: `${position.y}%`,
          }}
        >
          {noTexts[noCount % noTexts.length]}
        </button>
      </div>

      {showPopup && (
        <div className="overlay">
          <div className="popup">
            <h2>fuck yeah happy valentines!!! 🥰🎉</h2>
            <img
              src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
              alt="happy"
            />
            <img src={pic} className="pic" width={100} height={100} />
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
