import { useEffect, useState } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';

const GoToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${isVisible ? 'block' : 'hidden'}`}>
      <button
        type="button"
        onClick={scrollToTop}
        className="p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-4"
      >
        Navigate Top <FaArrowAltCircleUp/>
      </button>
    </div>
  );
};

export default GoToTop;
