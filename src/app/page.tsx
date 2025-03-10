export default function Home() {
  return (
    <div id="page" className="w-full justify-center min-h-screen mx-[25px] md:mx-[50px]">
      <main id="main" className="flex flex-col text-center decoration-none relative">
        <div className="flex flex-row text-nowrap text-left justify-center md:justify-between items-end w-[calc(100vw-50px)] leading-none text-[24vw] md:text-[11vw] xl:text-[12vw] md:w-[calc(100vw-100px)] font-[family-name:var(--font-erotique-sans-bold)]">
          <h1 id="brand-title-left" >BROOD</h1>
          <h1 id="brand-title-right" className="hidden md:block">COFFEE</h1>
        </div>
          <div id="folio" className="text-nowrap flex flex-row justify-between items-center -mt-4 lg:-mt-5 xl:-mt-6 2xl:-mt-8 border-t border-b w-[calc(100vw-50px)] md:w-[calc(100vw-100px)] font-[family-name:var(--font-ibm-plex-mono-semi-bold)] uppercase text-xs md:text-lg leading-none">
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
