export default function Loading() {
    return (
      <div className="fixed inset-0 bg-[#FFF5DD] z-50 flex items-center justify-center">
        <div className="text-[2vw] text-[#1F1818] text-center font-[family-name:var(--font-erotique-sans-bold)] animate-pulse">
          BREWING...
        </div>
      </div>
    );
  }