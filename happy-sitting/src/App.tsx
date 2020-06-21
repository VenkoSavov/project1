import React, { useState } from "react";
import "./App.css";
import MOCK_PARENTS from "./model/mock-parents";
import { userParent } from "./model/parent.model";
import { PostList } from "./components/PostList";
import CreatePost from "./components/CreatePost";

const initialParents: Array<userParent> = MOCK_PARENTS;

interface Props {}
interface State {
  posts: userParent[];
}

class App extends React.Component<Props, State> {
  state = {
    posts: initialParents,
  };
  render() {
    return (
      <div className="App">
        <div className="left-column">
          <PostList posts={this.state.posts} />
        </div>
        <div className="right-column">
          <CreatePost
            post={new userParent("", "", "", 0, 0, "", 0, "")}
            onCreate={this.handleCreate}
          />
        </div>
      </div>
    );
  }
  handleCreate = (post: userParent) => {
    this.setState(({ posts }) => ({ posts: posts.concat(post) }));
  };
}

export default App;
