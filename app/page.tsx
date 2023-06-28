import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
  
      <div className="flex flex-col items-center justify-center">
        <DocumentMagnifyingGlassIcon className="w-64 h-64 text-indigo-600/20" />
        <h1 className="text-3xl text-center mt-2 text-black/70 font-bold mb-5">
          Welcome to my amazon web scraper
        </h1>
        <h2 className="text-lg italic text-center text-black/50">
          {" "}
          Learning how to web scrap, then scrap SHEIN
        </h2>
        <h3 className="text-lg text-center italic text-black/50"> </h3>
      </div>
  );
}
