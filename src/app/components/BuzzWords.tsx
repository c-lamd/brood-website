export default function BuzzWords() {
    return (
        <div id="buzz-words-container" className="flex flex-col text-left text-light bg-dark gap-2 px-[15px] py-[15px] md:h-full overflow-hidden max-h-[300px] md:max-h-full">
            <div id="buzz-words-1" className="flex flex-1 flex-col justify-center items-center ">
                <div className="flex flex-col justify-center items-center gap-1 md:gap-2 w-full h-full">
                    <hr className="w-full border-t md:border-t-2 border-light" />
                    <hr className="w-full border-t-2 md:border-t-6 border-light" />
                </div>
                <div className="flex flex-row md:flex-col justify-center items-center gap-2 w-full h-full">
                    <h3 className="font-[family-name:var(--font-ibm-plex-mono-semi-bold)] text-[7vw] md:text-[3vw] uppercase leading-none">
                        LISTENING
                    </h3>
                    <h1 className="font-[family-name:var(--font-ibm-plex-mono-semi-bold)] text-[7vw] md:text-[5vw] uppercase leading-none">BAR</h1>
                </div>
                <div className="flex flex-col justify-center items-center gap-1 md:gap-2 w-full h-full">
                    <hr className="w-full border-t-1 md:border-t-2 border-light" />
                    <hr className="w-full border-t-2 md:border-t-6 border-light" />
                </div>
            </div>
            <div id="buzz-words-2" className="flex flex-1 flex-row md:flex-col justify-center items-center bg-light text-dark md:m-[16px] px-4 py-2 md:px-0 md:py-0 md:pt-4 gap-4 md:gap-0">
                <h3 className="font-[family-name:var(--font-erotique-bold)] text-[7vw] md:text-[3vw] uppercase leading-none">
                    SPECIALTY
                </h3>
                <h3 className="font-[family-name:var(--font-erotique-bold)] text-[7vw] md:text-[5vw] uppercase leading-none">
                    HONEY
                </h3>
            </div>
            <div id="buzz-words-3" className="flex flex-1 flex-col justify-center items-center gap-2">
                <div className="flex flex-1 flex-row md:flex-col justify-center items-center gap-4  md:gap-0">
                <h3 className="font-[family-name:var(--font-cormorant-garamond-bold-italic)] text-[7vw] md:text-[5vw] uppercase leading-none">
                    EXPERT
                </h3>
                <h3 className="font-[family-name:var(--font-cormorant-garamond-bold-italic)] text-[7vw] md:text-[4vw] uppercase leading-none">
                    BARISTAS
                </h3>
                </div>
                <svg className="w-full h-[18px] md:mb-2" viewBox="0 0 300 18">
                    <polygon
                        className="hidden md:block"
                        points="150,18 0,0 300,0"
                        fill="#FFF5DD"
                    />
                    <polygon
                        className="block md:hidden"
                        points="150,10 0,0 300,0"
                        fill="#FFF5DD"
                    />
                </svg>
            </div>
        </div>
    )
}
