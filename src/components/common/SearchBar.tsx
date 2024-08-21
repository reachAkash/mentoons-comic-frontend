import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

type SearchBarProps ={
  placeholders: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholders }) => {
  const [placeholder, setPlaceholder] = useState(placeholders[0]);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => { 
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % placeholders.length;
        setPlaceholder(placeholders[newIndex]);
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(intervalId); 
  }, [placeholders]);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <div className="flex justify-center mt-10">
      <div className="relative w-full max-w-md">
        <input type="text" className='hidden' value={index}/>
      <input
          type="text"
          placeholder={placeholder}
          className={`min-w-full lg:min-w-[29rem] py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${animate ? 'scroll-placeholder' : ''}`}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <FaSearch className="w-5 h-5 text-gray-500" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
