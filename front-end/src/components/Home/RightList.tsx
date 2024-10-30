import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function RightList() {
  const datas = [
    {
      id: "user/one",
      title: "대충제목1",
      image: "./vite.svg",
      like: 2,
      comments: 1,
    },
    {
      id: "user/one",
      title: "대충제목2",
      image: "./vite.svg",
      like: 3,
      comments: 2,
    },
    {
      id: "user/one",
      title: "대충제목3",
      image: "./vite.svg",
      like: 4,
      comments: 3,
    },
    {
      id: "user/one",
      title: "대충제목4",
      image: "./vite.svg",
      like: 4,
      comments: 4,
    },
  ];

  return (
    <div className="border border-gray-300 p-4 rounded-lg gap-2 flex flex-col">
      <h1 className="text-xl font-bold">최근 개쩌는 맛집</h1>
      <div className="flex flex-col">
        {datas.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-row justify-between pt-2 border-t border-t-gray-300"
            >
              <div>
                <Link to={data.id} className="text-lg font-semibold">
                  {data.title}
                </Link>
                <div className="flex flex-row gap-1 items-center">
                  <FaRegHeart /> {data.like}
                  <FaRegComment /> {data.comments}
                </div>
              </div>
              <img src="/vite.svg" alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
