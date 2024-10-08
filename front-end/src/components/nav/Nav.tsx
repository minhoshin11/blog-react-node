import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavList } from "./NavList";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative py-4 px-6 border border-gray-200 flex justify-between">
      <div>
        <RxHamburgerMenu
          className="relative w-[30px] h-auto transition-colors duration-300 hover:text-red-400 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
      <h1 className="text-2xl">대충 블로거 이름</h1>
      <div>
        <FaSearch className="w-[30px] h-auto transition-colors duration-300 hover:text-red-400" />
      </div>

      {/* 왼쪽에 붙는 슬라이드 메뉴 */}
      <div
        className={`absolute flex items-start top-0 mt-[60px] pl-5 left-0 h-auto w-[250px] bg-gray-200 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="my-5 flex justify-between flex-col gap-3">
          <li>
            <a
              href="#"
              className="relative pb-1 border-b-2 border-transparent hover:border-red-400 transition-all duration-300"
            >
              메뉴 1
            </a>
          </li>
          {NavList.map((menu: any, i: number) => {
            return (
              <li key={i}>
                <a
                  href={menu.value}
                  className="relative pb-1 border-b-2 border-transparent hover:border-red-400 transition-all duration-300"
                >
                  {i}
                  {menu.key}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
