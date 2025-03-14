export default function Loading() {
    return (
      <div className="fixed inset-0 bg-light z-50 flex items-center justify-center">
        <div className="text-[7vw] md:text-[2vw] text-dark text-center font-[family-name:var(--font-erotique-sans-bold)] animate-pulse">
          BREWING...
        </div>
      </div>
    );
  }