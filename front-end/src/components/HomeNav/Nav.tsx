import { useEffect, useRef, useState } from "react";
import { FaRegBell, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AlarmList, HomeNavList } from "./HomeNavList";

export default function Nav() {
  const [myInfoOpen, setMyInfoOpen] = useState(false);
  const [alarmsOpen, setAlarmsOpen] = useState(false);
  const toggleModalRef = useRef<HTMLDivElement | null>(null);

  const toggleMyInfo = () => {
    alarmsOpen && setAlarmsOpen(false);
    setMyInfoOpen(!myInfoOpen);
    console.log("내정보", myInfoOpen);
  };
  const toggleAlarms = () => {
    myInfoOpen && setMyInfoOpen;
    setAlarmsOpen(!alarmsOpen);
    console.log("알람", alarmsOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        toggleModalRef.current &&
        event.target instanceof Node &&
        !toggleModalRef.current.contains(event.target)
      ) {
        setMyInfoOpen(false);
        setAlarmsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="relative py-4 px-6 border border-gray-200 flex justify-between">
      <Link
        to="/"
        className="text-2xl relative w-[30px] h-auto transition-colors duration-300 hover:text-red-400 cursor-pointer"
      >
        Ustory
      </Link>
      <div className="flex flex-row gap-2 w-auto sm:w-[50vw]">
        <input
          type="search"
          className="border border-black rounded-xl w-[40vw] px-2 hover:border-red-400 transition-all duration-300 outline-none focus:border-red-400"
        ></input>
        <FaSearch className="w-[25px] h-auto transition-colors duration-300 hover:text-red-400" />
      </div>

      <div
        ref={toggleModalRef}
        className="flex flex-row gap-4 relative justify-center"
      >
        <FaRegBell
          onClick={toggleAlarms}
          className="w-[25px] h-auto hover:text-red-400 transition-all duration-300"
        />
        <div
          className="border rounded-full border-black overflow-hidden"
          onClick={toggleMyInfo}
        >
          <img src="/vite.svg" alt="임시 이미지" className="w-[30px] h-auto" />
        </div>
      </div>
      {/* 내 정보의 토글 메뉴 */}
      <div
        className={`absolute flex top-0 mt-[64px] pl-5 right-0 h-auto w-[250px] border rounded-xl bg-gray-200 transform transition-transform duration-300 ${
          myInfoOpen ? "block" : "hidden"
        }`}
      >
        <ul className="my-3 flex justify-start flex-col gap-3">
          {HomeNavList.map((menu: any, i: number) => {
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
      <div
        className={`absolute flex top-0 mt-[64px] pl-5 right-0 h-auto w-[250px] border rounded-xl bg-gray-200 transform transition-transform duration-300 ${
          alarmsOpen ? "block" : "hidden"
        }`}
      >
        <ul className="my-3 flex justify-start flex-col gap-3">
          {AlarmList.map((menu: any, i: number) => {
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
