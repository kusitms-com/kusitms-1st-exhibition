'use client';

import { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="flex justify-between px-6 py-4">
        <div>
          <img src="/logo/logo.svg" alt="로고" />
        </div>
        <div className="font-clash-display text-2xl font-medium">HOME</div>
        <button onClick={handleMenuButtonClick}>
          <img src="/icons/hamburger-menu.svg" alt="메뉴 버튼" />
        </button>
      </div>
      {/* <div className="w-full bg-black text-center">
        <ul>
          <li>메뉴입니다.</li>
        </ul>
      </div> */}
    </nav>
  );
};

export default NavBar;
