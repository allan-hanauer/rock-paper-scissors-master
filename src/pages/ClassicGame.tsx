import { useState } from "react";
import InitialStage from "../components/InitialStage";
import PickedStage from "../components/PickedStage";

const ClassicGame = () => {
  const gameStage = ["select", "picked", "final"];
  const [gameState, setGameState] = useState(gameStage[0]);
  const [user, setUser] = useState("");
  const [win, setWin] = useState(-1);
  console.log(user);
  if (gameState === gameStage[0]) {
    return (
      <>
        <InitialStage
          gameStage={gameStage}
          setGameState={setGameState}
          setUser={setUser}
        />
      </>
    );
  }
  if (gameState === gameStage[1] && win === -1) {
    return (
      <>
        <PickedStage
          user={user}
          gameStage={gameStage}
          setGameState={setGameState}
          setWin={setWin}
          win={win}
        />
      </>
    );
  }
};

export default ClassicGame;
