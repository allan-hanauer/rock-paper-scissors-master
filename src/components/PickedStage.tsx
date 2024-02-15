import React, { useEffect } from "react";
import Button from "./Button";

interface PickedProps {
  user: string;
  setWin: React.Dispatch<React.SetStateAction<number>>;
  setGameState: React.Dispatch<React.SetStateAction<string>>;
  setHome: React.Dispatch<React.SetStateAction<string>>;
  gameStage: string[];
  home: string;
}

const PickedStage: React.FC<PickedProps> = ({
  user,
  setWin,
  gameStage,
  setGameState,
  setHome,
  home,
}) => {
  const total = ["paper", "rock", "scissors"];

  const getRandomIntInclusive = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      const num = getRandomIntInclusive(0, 2);
      const randomPick = total[num];
      setHome(randomPick);
      winGame(randomPick);
    }, 3000);

    return () => clearTimeout(timerId);
  }, [user]);

  const winGame = (opponentPick: string) => {
    const results: Record<string, Record<string, number>> = {
      paper: { paper: 0, rock: 1, scissors: 2 },
      rock: { paper: 2, rock: 0, scissors: 1 },
      scissors: { paper: 1, rock: 2, scissors: 0 },
    };

    const result = results[user][opponentPick];

    setTimeout(() => {
      if (result === 1) {
        setWin(1);
      } else if (result === 2) {
        setWin(2);
      } else {
        setWin(0);
      }

      setGameState(gameStage[2]);
    }, 2000); // Adicione o tempo de espera aqui, por exemplo, 2000ms (2 segundos)
  };

  return (
    <div className="game">
      <div className="picked">
        <div className="user">
          <h2 className="picked_user">YOU PICKED</h2>
          <Button img={user} disable={true} />
        </div>
        <div className="home">
          <h2 className="picked_house">THE HOUSE PICKED</h2>
          {home === "" ? (
            <div className="waiting"></div>
          ) : (
            <Button img={home} disable={true} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PickedStage;
