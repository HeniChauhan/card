import { useEffect, useState } from "react";
import Confetti from "react-confetti";

const First = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  // Function to activate the confetti
  const startConfetti = () => {
    setIsConfettiActive(true);
    // Deactivate confetti after 9 seconds
    setTimeout(() => {
      setIsConfettiActive(false);
    }, 9000);
  };

  useEffect(() => {
    startConfetti()
    // Clean up the confetti after it has finished
    return () => {
      setIsConfettiActive(false);
    };
  }, []);
  return (
    <div className="App">
    {isConfettiActive && <Confetti  />}
    </div>
  );
}

export default First;