import { useState, useEffect } from "react";
import Card from "./components/Card";

const App = () => {
  const [advice, setAdvice] = useState({});
  const [newAdvice, setNewAdvice] = useState(true);

  useEffect(() => {
    const getAdvice = async () => {
      const response = await fetch("https://api.adviceslip.com/advice");
      const { slip } = await response.json();
      setAdvice(slip);
    };
    getAdvice();
  }, [newAdvice]);

  const getNewAdvice = () => {
    setNewAdvice(!newAdvice);
  };

  return (
    <div className="container">
      <Card getNewAdvice={getNewAdvice} advice={advice} />
    </div>
  );
};

export default App;
