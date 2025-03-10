export default function Home() {
  return (
    <div id="page" className="w-full justify-center min-h-screen mx-4 md:mx-[50px]">
      <main id="main" className="flex flex-col text-center decoration-none relative">
          <h1 id="brand-title" className="text-nowrap text-center w-[calc(100vw-50px)] max-h-[260px] md:w-[calc(100vw-100px)] font-[family-name:var(--font-erotique-sans-bold)] text-[11vw] xl:text-[12vw] h-fit leading-none">BROOD COFFEE</h1>
          <div id="folio" className="text-nowrap flex flex-row justify-between items-center border-t border-b w-[calc(100vw-50px)] md:w-[calc(100vw-100px)] font-[family-name:var(--font-ibm-plex-mono-semi-bold)] uppercase text-xs md:text-lg leading-none">
            <h6>VOLUME 1.</h6>
            <h6>IRVINE, CA</h6>
            <h6>{new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' }).toUpperCase()}</h6>
          </div>
        </main>
        <div className="h-[100vh]">something</div>
        <div className="h-[100vh]">something</div>
        <div className="h-[100vh]">something</div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a href="https://vercel.com" className="flex gap-2 items-center"></a>
      </footer>
    </div>
  );
}
