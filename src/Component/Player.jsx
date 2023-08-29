import React, { useState, useEffect } from "react";
import "./player.css";

const Player = ({ player, position }) => {
  const [currentScore, setCurrentScore] = useState(player.score);

  useEffect(() => {
    setCurrentScore(player.score);
  }, [player.score]);

  return (
    <div className="mainPlayer">
      <div className="Player">
        <span className="Position">{position}</span>
        <div className="PlayerInfo">
          <span className="DisplayName">{player.displayName}</span>
          <span className="Score">{currentScore}</span>
        </div>
      </div>
    </div>
  );
};

export default Player;
