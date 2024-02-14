import { useState } from "react";
import Rules from "./Rules";

const Footer = () => {
  const [rules, setRules] = useState(false);

  return (
    <footer className="bold">
      <button className="rules" type="button" onClick={() => setRules(!rules)}>
        RULES
      </button>
      {rules ? <Rules rules={rules} setRules={setRules} /> : <></>}
      <p>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">AllanHanauer</a>.
      </p>
    </footer>
  );
};

export default Footer;
