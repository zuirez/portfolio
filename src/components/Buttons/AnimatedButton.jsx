import React from 'react';

const AnimatedButton = ({ text, backgroundColor, className, onClick }) => {
  const letters = text.split('');

  return (
    <button 
      className={`animated-button ${className || ''}`} 
      onClick={onClick}
      style={{ backgroundColor }}
    >
      <span className="text-top">
        {letters.map((letter, index) => (
          <span 
            key={`first-${index}`} 
            style={{ transition: `${0.2 + index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </span>

      <span className="text-bottom">
        {letters.map((letter, index) => (
          <span 
            key={`second-${index}`} 
            style={{ transition: `${0.2 + index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </span>
    </button>
  );
};

export default AnimatedButton;
