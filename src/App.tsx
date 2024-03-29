import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import ClassicGame from "./pages/ClassicGame";

const App = () => {
  const [score, setScore] = useState(0);
  return (
    <>
      <Header score={score} />
      <main>
        <ClassicGame score={score} setScore={setScore} />
      </main>
      <Footer />
    </>
  );
};
export default App;
