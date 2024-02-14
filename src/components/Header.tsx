import React from "react";

interface HeaderProps {
  score: number;
}

const Header: React.FC<HeaderProps> = ({ score }) => {
  return (
    <header>
      <h1 className="bold">
        ROCK
        <br />
        <span>PAPER</span>
        <br />
        SCISSORS
      </h1>
      <div className="score_box">
        <p className="score_text">SCORE</p>
        <p className="points">{score}</p>
      </div>
    </header>
  );
};

export default Header;
