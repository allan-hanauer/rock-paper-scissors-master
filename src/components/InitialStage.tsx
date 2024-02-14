import Button from "./Button";
interface initialStageProps {
  setGameState: React.Dispatch<React.SetStateAction<string>>;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  gameStage: string[];
}
const InitialStage: React.FC<initialStageProps> = ({
  setGameState,
  setUser,
  gameStage,
}) => {
  return (
    <div className="game">
      <div className="initial">
        <svg
          className="line-game"
          width="313"
          height="278"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="#000"
            stroke-width="15"
            fill="none"
            opacity=".2"
            d="M156.5 262 300 8H13z"
          />
        </svg>
        <Button
          img={"paper"}
          setGameState={setGameState}
          gameStage={gameStage}
          setUser={setUser}
          disable={false}
        />
        <Button
          img={"rock"}
          setGameState={setGameState}
          gameStage={gameStage}
          setUser={setUser}
          disable={false}
        />
        <Button
          img={"scissors"}
          setGameState={setGameState}
          gameStage={gameStage}
          setUser={setUser}
          disable={false}
        />
      </div>
    </div>
  );
};

export default InitialStage;
