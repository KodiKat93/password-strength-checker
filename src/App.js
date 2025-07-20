import React, { useState } from "react";
import './App.css';

function App() {
  const [password, setPassword] = useState("");

  const checkStrength = (pw) => {
    let score = 0;
    if (pw.length >= 14) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[a-z]/.test(pw)) score++;
    if (/\d/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;

    const levels = ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"];
    const tips =["Make sure your password is at least 14 characters long.",
      "Use your favourite sentence/quote/or saying as your password.",
      "Don’t use relatives’ names in passwords.",
      "Avoid birthdays or obvious patterns.",
      "Your password is great! 🎉"
    ];
    
    return {
      level: levels[score] || "Very Weak",
      tip: tips[score] || tips[0]
    };
  };

  const {level, tip} = checkStrength(password);

  return (
    <div className="App">
      <h2>Password Strength Checker 🔐</h2>
      <input
      type="password"
      placeholder="Enter password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
      <p>Strength: {level}</p>
      <p>Helpful Tip: {tip}</p>
    </div>
  );
}

export default App;
