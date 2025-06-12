"use client";

import React, { useState } from "react";

export default function Assistente() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    // Placeholder para chamada IA Gemini (simulação)
    setResponse("Processando sua pergunta com IA Gemini...");
    setTimeout(() => {
      setResponse(`Resposta simulada para: "${input}"`);
    }, 1500);
  };

  return (
    <div style={{ padding: 10, border: "1px solid #ddd", borderRadius: 8 }}>
      <h3>Assistente Virtual (IA Gemini)</h3>
      <textarea
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite sua pergunta aqui"
        style={{ width: "100%", marginBottom: 10 }}
      />
      <button onClick={handleSend}>Enviar</button>
      <div style={{ marginTop: 10, whiteSpace: "pre-wrap" }}>{response}</div>
    </div>
  );
}
