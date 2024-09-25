import React from "react";

const Button = ({ btnText, onClick }) => {
  return (
    <button
      className="relative min-w-[184px] inline-flex items-center justify-center px-6 py-[18px] overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group"
      onClick={onClick}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-accent via-blue-800 to-accent/30"></span>
      <span className="absolute bottom-0 right-0 block w-72 h-72 mb-32 mr-4 transition duration-500 origin-bottom transform rotate-45 translate-x-24 bg-gray-800 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
      <span className="relative text-white text-sm uppercase tracking-[1px]">
        {btnText}
      </span>
    </button>
  );
};

export default Button;
