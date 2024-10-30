import { useParams } from "react-router-dom";

export default function PostPage() {
  const params = useParams();
  return <div>{params.id}</div>;
}
