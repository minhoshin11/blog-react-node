import Carousel from "./Carousel";

export default function LeftSection() {
  const items = [
    { id: 1, name: "퉁퉁이", title: "대충 큰 글자 1" },
    { id: 2, name: "짱구", title: "대충 큰 글자 2" },
    { id: 3, name: "철수", title: "대충 큰 글자 3" },
    { id: 4, name: "유리", title: "대충 큰 글자 4" },
    { id: 5, name: "맹구", title: "대충 큰 글자 5" },
  ];

  return (
    <div className="flex gap-10 flex-col relative">
      <Carousel />
      {items.map((item, index) => (
        <div
          key={item.id}
          className="flex flex-row gap-3 w-[50vw] border-b-2 py-4 border-gray-100"
        >
          <div className="flex font-bold text-neutral-400 text-3xl">
            {index + 1}
          </div>
          <div className="flex font-thin text-neutral-400 text-3xl">/</div>
          <div className="flex flex-col">
            <div className="text-neutral-400">{item.name}</div>
            <div className="font-semibold text-xl">{item.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
