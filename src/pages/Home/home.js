import { useEffect } from "react";
import { getUsers } from "../../store/actions/Home";
import { useSelector, useDispatch } from "react-redux";

export const Home = () => {
  const dispatch = useDispatch();
  const {
    homeReducer: { data },
  } = useSelector((store) => store);
  console.log(data);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  if (data.length === 0) {
    return <div>Loading.....</div>;
  }
  return (
    <div>
      {data.map((post) => {
        return <div>{post.title}</div>;
      })}
    </div>
  );
};
