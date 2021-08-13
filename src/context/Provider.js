import React, { Component } from "react";
import MyContext from "./MyContext";
import { getPostsBySubreddit } from "../services/redditAPI";

class Provider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSubreddit: 'reactjs',
      availableSubreddits: ['reactjs', 'frontend'],
      isFetching: false,
      posts: [],
      getPosts: this.getPosts,
    };
  }

  getPosts = async (selectedSubreddit) => {
    this.setState({isFetching: true})
    const result = await getPostsBySubreddit(selectedSubreddit);
    this.setState({
      posts: result.data.children,
      selectedSubreddit: selectedSubreddit,
      lastUpdated: Date.now(),
      isFetching: false,
    })
  }

  render() {
    const { children } = this.props;
    const state = { ...this.state }
    return (
      <MyContext.Provider value={state}>
        {children}
      </MyContext.Provider>
    );
  }
};

export default Provider;
