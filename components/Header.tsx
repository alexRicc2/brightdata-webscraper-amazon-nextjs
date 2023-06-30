"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { FormEvent, useRef } from "react";

function Header() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputRef.current?.value;
    if(!input) return;
    if(inputRef.current?.value){
      inputRef.current.value = "";
    }
    try {
      //Call api
      const response = await fetch('/activateScraper', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({search: input})
      })
    }catch (error) {
      // Handle errors
    }
    // Wait for the response
  };

  return (
    <header>
      <form
        className="flex items-center space-x-2 justify-center py-2 px-4 max-w-md mx-auto bg-indigo-100 rounded-full"
        onSubmit={handleSearch}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="search..."
          className="flex-1 outline-none bg-transparent text-indigo-400 placeholder:text-indigo-300"
        />
        <button hidden></button>
        <MagnifyingGlassIcon className="w-6 h-6 text-indigo-600" />
      </form>
    </header>
  );
}
export default Header;
