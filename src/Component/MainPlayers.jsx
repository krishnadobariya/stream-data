import React, { useEffect, useState } from "react";
import Player from "./Player";
import "./player.css";

const MainPlayers = () => {
  const [players, setPlayers] = useState([
    {
      userID: "u-1",
      displayName: "Jone",
      picture: "",
      score: 157000,
    },
    {
      userID: "u-2",
      displayName: "Victoria",
      picture: "",
      score: 46200,
    },
    {
      userID: "u-3",
      displayName: "Joy",
      picture: "",
      score: 38800,
    },
    {
      userID: "u-4",
      displayName: "Quinn",
      picture: "",
      score: 33400,
    },
    {
      userID: "u-5",
      displayName: "Sheenalo",
      picture: "",
      score: 31600,
    },
    {
      userID: "u-6",
      displayName: "Charlene",
      picture: "",
      score: 30800,
    },
    {
      userID: "u-7",
      displayName: "LeonaBaby",
      picture: "",
      score: 22300,
    },
    {
      userID: "u-8",
      displayName: "Sunny",
      picture: "",
      score: 17800,
    },
    {
      userID: "u-9",
      displayName: "ImWord",
      picture: "",
      score: 17300,
    },
    {
      userID: "u-10",
      displayName: "Dophine",
      picture: "",
      score: 15400,
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayers((prevPlayers) =>
        prevPlayers
          .map((player) => ({
            ...player,
            score: player.score + Math.floor(Math.random() * 1000),
          }))
          .sort((a, b) => a.score - b.score)
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {players &&
        players.map((player, index) => {
          return (
            <Player key={player.userID} player={player} position={index + 1} />
          );
        })}
    </div>
  );
};

export default MainPlayers;
