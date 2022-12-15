import { useEffect } from "react";
import { getUsers } from "../../store/actions/Home";

export const Home = () => {
  const data = [{ title: "New Title" }, { title: "New Drama" }];
  if (data.length === 0) {
    return <div>Loading.....</div>;
  }
  return (
    <div>
      <div data-testid="test_id">Test</div>
      {data.map((post) => {
        return <div>{post.title}</div>;
      })}
    </div>
  );
};
