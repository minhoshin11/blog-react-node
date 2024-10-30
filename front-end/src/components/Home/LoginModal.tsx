import { useEffect, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";

interface LoginModalProps {
  toggleLogin: boolean;
  setToggleLogin: (value: boolean) => void;
}

export default function LoginModal({
  toggleLogin,
  setToggleLogin,
}: LoginModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setToggleLogin(false);
    }
  };

  useEffect(() => {
    if (toggleLogin) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleLogin]);

  return (
    <div
      ref={modalRef}
      className={`${
        toggleLogin ? "block" : "hidden"
      } z-20 bg-white flex flex-col items-center gap-8 absolute border-2 border-gray-600 w-[30vw] pb-[20px] rounded-md`}
    >
      <div className="w-full flex justify-end">
        <IoCloseSharp
          onClick={() => setToggleLogin(false)}
          className="mt-2 mr-2 mb-2 w-[40px] h-auto text-gray-500"
        />
      </div>
      <div className="flex flex-col items-center gap-2 px-[50px]">
        <h2 className="text-4xl font-bold">Tistory</h2>
        <p className="text-gray-400">당신의 이야기가 값진 수익이 됩니다.</p>
      </div>
      <img src="/vite.svg" alt="이미지사진예시" className="w-[150px] h-auto" />
      <div className="border">일반로그인</div>
      <div className="border bg-yellow-300">카카오 계정 로그인</div>
      <div className="flex flex-col items-center gap-2">
        <div className="text-gray-400">내 스토리 계정을 모르겠어요</div>
        <div className="text-gray-400">
          티스토리 이메일 계정으로 가입했었나요?
        </div>
      </div>
    </div>
  );
}
