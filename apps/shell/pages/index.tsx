"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Assistente = dynamic(() => import("assistente/assistente"), {
  ssr: false,
  loading: () => <p>Carregando assistente...</p>,
});

const Simulador = dynamic(() => import("simulador/simulador"), {
  ssr: false,
  loading: () => <p>Carregando assistente...</p>,
});

export default function Home() {
  return (
    <main>
      <h1>Bem-vindo ao GemCred</h1>
      <Suspense fallback={<p>Carregando assistente...</p>}>
        <Assistente />
      </Suspense>

      <Suspense fallback={<p>Carregando assistente...</p>}>
        <Simulador />
      </Suspense>
    </main>
  );
}
