import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./home";
import { Provider } from "react-redux";
import store from "../../store/configureStore";

it("Loading_render", async () => {
  render(
    <Provider store={store()}>
      <Home />
    </Provider>
  );
  const heading = screen.getByText("Loading.....");
  expect(heading).toBeInTheDocument();
});
import * from '../../store/actions/Home/'
it('Post_render', async () => {
    jest.mock("../");

    const posts = [{ id: 1, title: "My post", userId: "1",body:"some post body" }];
  fetchPosts.mockResolvedValueOnce(posts);
})
