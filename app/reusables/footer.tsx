import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="p-5 pt-3 pb-6 flex text-xs text-center mt-3 dark:text-gray-400 text-gray-500 font-mono">
      <div className="grow text-left">tin</div>
      <div>&copy; {new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
