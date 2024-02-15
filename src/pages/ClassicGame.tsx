import { useState } from "react";
import InitialStage from "../components/InitialStage";
import PickedStage from "../components/PickedStage";
import FinalStage from "../components/FinalStage";
interface classicGameProps {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const ClassicGame: React.FC<classicGameProps> = ({ score, setScore }) => {
  const gameStage = ["select", "picked", "final"];
  const [gameState, setGameState] = useState(gameStage[0]);
  const [user, setUser] = useState("");
  const [win, setWin] = useState(-1);
  const [home, setHome] = useState("");
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
  if (gameState === gameStage[1]) {
    return (
      <>
        <PickedStage
          user={user}
          gameStage={gameStage}
          setGameState={setGameState}
          setWin={setWin}
          setHome={setHome}
          home={home}
        />
      </>
    );
  }
  if (gameState === gameStage[2]) {
    if (win === 0) {
      return (
        <>
          <FinalStage
            win={win}
            user={user}
            home={home}
            setScore={setScore}
            score={score}
            setHome={setHome}
            setUser={setUser}
            setGameState={setGameState}
            gameStage={gameStage}
            message={"DRAW!"}
            setWin={setWin}
          />
        </>
      );
    }
    if (win === 1) {
      return (
        <>
          <FinalStage
            win={win}
            user={user}
            home={home}
            setScore={setScore}
            score={score}
            setHome={setHome}
            setUser={setUser}
            setGameState={setGameState}
            gameStage={gameStage}
            message={"WIN!"}
            setWin={setWin}
          />
        </>
      );
    }
    if (win === 2) {
      return (
        <>
          <FinalStage
            win={win}
            user={user}
            home={home}
            setScore={setScore}
            score={score}
            setHome={setHome}
            setUser={setUser}
            setGameState={setGameState}
            gameStage={gameStage}
            message={"LOSE!"}
            setWin={setWin}
          />
        </>
      );
    }
  }
};

export default ClassicGame;
