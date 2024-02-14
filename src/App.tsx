import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {
  const [score, setScore] = useState(12);
  return (
    <>
      <Header score={score} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default App;
