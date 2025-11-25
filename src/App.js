import React, { useEffect, useState } from "react";
import "./App.css";
import foto from "./foto.jpg";

function App() {
  const [timeLeft, setTimeLeft] = useState({});
  const targetDate = new Date("2025-12-15T00:00:00");

  function updateTimer() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      setTimeLeft(null); 
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    setTimeLeft({ days, hours, minutes, seconds });
  }

  useEffect(() => {
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Contador de Formatura – Seu Nome Completo – Turma X</h1>

      {timeLeft ? (
        <div className="contador">
          <h2>Faltam:</h2>
          <p>
            <strong>{timeLeft.days}</strong> dias |{" "}
            <strong>{timeLeft.hours}</strong> horas |{" "}
            <strong>{timeLeft.minutes}</strong> minutos |{" "}
            <strong>{timeLeft.seconds}</strong> segundos
          </p>
        </div>
      ) : (
        <h2 className="mensagem-final">
          🎓 Parabéns, chegou o grande dia da nossa formatura! 🎉
        </h2>
      )}

      <div className="texto-futuro">
        <p>
          Depois da formatura, pretendo viajar, descansar e aproveitar muito
          esse novo momento da minha vida!
        </p>
      </div>

      <img src={foto} alt="Foto temática" className="imagem" />
    </div>
  );
}

export default App;
