import { useState } from "react";
import LeftSection from "../components/Home/LeftSection";
import LoginModal from "../components/Home/LoginModal";
import RightSection from "../components/Home/RightSection";

export default function Home() {
  const [toggleLogin, setToggleLogin] = useState(true);
  const handleLoginModal = () => {
    setToggleLogin(!toggleLogin);
    console.log(toggleLogin);
  };

  return (
    <section className="flex justify-center relative">
      <div className="w-auto flex gap-1">
        <section className="w-3/5 border-r border-black px-8 py-2">
          <LeftSection />
        </section>
        <section className="w-2/5  px-8 py-2">
          <RightSection />
        </section>
        <div className="hover:cursor-pointer" onClick={handleLoginModal}>
          대충 로그인모달
        </div>
      </div>
      <LoginModal toggleLogin={toggleLogin} setToggleLogin={setToggleLogin} />
    </section>
  );
}
