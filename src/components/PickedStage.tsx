import { useEffect, useState } from "react";
import Button from "./Button";
interface pickedProps {
  user: string;
  win: number;
  setWin: React.Dispatch<React.SetStateAction<number>>;
}
const PickedStage: React.FC<pickedProps> = ({ user, setWin, win }) => {
  const total = ["paper", "rock", "scissors"];
  const [home, setHome] = useState("");
  const getRandomIntInclusive = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  useEffect(() => {
    const timerId = setTimeout(() => {
      const num = getRandomIntInclusive(0, 3);
      setHome(total[num]);
      console.log(home);
    }, 3000);
    return () => clearTimeout(timerId);
  }, [user]);
  const winGame = () => {
    if (user === total[0] && home === total[1]) {
      setWin(1);
    } else if (user === total[0] && home === total[2]) {
      setWin(2);
    } else if (user === total[0] && home === total[0]) {
      setWin(0);
    } else if (user === total[1] && home === total[0]) {
      setWin(2);
    } else if (user === total[1] && home === total[2]) {
      setWin(1);
    } else if (user === total[1] && home === total[1]) {
      setWin(0);
    } else if (user === total[2] && home === total[0]) {
      setWin(1);
    } else if (user === total[2] && home === total[1]) {
      setWin(2);
    } else if (user === total[2] && home === total[2]) {
      setWin(0);
    }
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
          {home != "" ? (
            <Button img={home} disable={true} />
          ) : (
            <div className="waiting"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PickedStage;
