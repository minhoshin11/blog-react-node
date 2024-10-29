import LeftSection from "../components/Home/LeftSection";
import RightSection from "../components/Home/RightSection";

export default function Home() {
  return (
    <section className="flex justify-center relative">
      <div className="w-auto flex gap-1 my-20">
        <section className="w-[60vw] border-r border-black px-8 py-2">
          <LeftSection />
        </section>
        <section className="w-[30vw] px-8 py-2">
          <RightSection />
        </section>
        {/* <div className="hover:cursor-pointer" onClick={handleLoginModal}>
          대충 로그인모달
        </div> */}
      </div>
    </section>
  );
}
