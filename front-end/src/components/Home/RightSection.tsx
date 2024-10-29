import { useState } from "react";
import LoginModal from "./LoginModal";

export default function RightSection() {
  const [toggleLogin, setToggleLogin] = useState(true);
  const handleLoginModal = () => {
    setToggleLogin(!toggleLogin);
    console.log(toggleLogin);
  };
  return (
    <div>
      <div
        className="border w-[30vw] border-gray-300 rounded-lg justify-center p-4 flex hover:cursor-pointer"
        onClick={handleLoginModal}
      >
        Login
      </div>
      <div> </div>
      <LoginModal toggleLogin={toggleLogin} setToggleLogin={setToggleLogin} />
    </div>
  );
}
