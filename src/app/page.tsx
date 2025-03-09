import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-[family-name:var(--font-erotique-sans-bold)]">BROOD COFFEE</h1>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a href="https://vercel.com" className="flex gap-2 items-center"></a>
      </footer>
    </div>
  );
}
