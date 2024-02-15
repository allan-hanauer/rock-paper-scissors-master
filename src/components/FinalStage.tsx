import Button from "./Button";

interface finalStageProps {
  setGameState: React.Dispatch<React.SetStateAction<string>>;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  setHome: React.Dispatch<React.SetStateAction<string>>;
  setWin: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  gameStage: string[];
  user: string;
  home: string;
  score: number;
  message: string;
  win: number;
}
const FinalStage: React.FC<finalStageProps> = ({
  setGameState,
  gameStage,
  setHome,
  setScore,
  score,
  setUser,
  home,
  message,
  setWin,
  win,
  user,
}) => {
  console.log(home + " final stage home escolha");
  console.log(message);
  const endGameChange = () => {
    setGameState(gameStage[0]);
    setHome("");
    if (win === 1) {
      setScore(score + 1);
    }
    if (win === 0) {
      setScore(score + 0);
    }
    if (win === 2) {
      setScore(score - 1);
    }
    setUser("");
    setWin(-1);
  };
  return (
    <div className="game">
      <div className="final">
        <div className="picked-card">
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
        <div className="selection-final">
          <h3>{message}</h3>
        </div>
        <div className="end-game">
          <button onClick={() => endGameChange()}>PLAY AGAIN</button>
        </div>
      </div>
    </div>
  );
};

export default FinalStage;
