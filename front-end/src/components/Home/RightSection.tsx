import { useState } from "react";
import LoginModal from "./LoginModal";
import RightList from "./RightList";

export default function RightSection() {
  const [toggleLogin, setToggleLogin] = useState(true);
  const handleLoginModal = () => {
    setToggleLogin(!toggleLogin);
    console.log(toggleLogin);
  };

  return (
    <div className="flex gap-4 flex-col w-[30vw]">
      <div
        className="border border-gray-300 rounded-lg justify-center p-4 flex hover:cursor-pointer"
        onClick={handleLoginModal}
      >
        Login
      </div>
      <RightList />
      <RightList />
      <LoginModal toggleLogin={toggleLogin} setToggleLogin={setToggleLogin} />
    </div>
  );
}
