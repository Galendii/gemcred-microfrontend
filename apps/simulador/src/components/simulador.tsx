"use client";

import React from "react";

export default function Simulador() {
  return (
    <div style={{ padding: 10, border: "1px solid #ddd", borderRadius: 8 }}>
      <h3>Componente Simulador</h3>
      <p>
        Componente React que será importado remotamente pelo shell via Module
        Federation.
      </p>
    </div>
  );
}
