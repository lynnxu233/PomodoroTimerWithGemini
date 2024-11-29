"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [result, setResult] = useState("Loading...");
  const [error, setError] = useState(null);

  useEffect(() => {
    ai.languageModel
      .create({
        temperature: 1,
        topK: 3,
      })
      .then((session) => {
        return session.prompt("Give me a warm encouragement on my study.");
      })
      .then((advice) => {
        setResult(advice); // Update state with result
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("Failed to load advice.");
      });
  }, []);

  return (
    <div>
      <h1>AI Study Advice</h1>
      {error ? <p>{error}</p> : <p>{result}</p>}
    </div>
  );
}