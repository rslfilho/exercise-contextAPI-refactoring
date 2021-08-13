import React, { Component } from 'react';
import Posts from './components/Posts';
import Selector from './components/Selector';
import MyContext from './context/MyContext';

class App extends Component {
  componentDidMount() {
    const { getPosts, selectedSubreddit } = this.context;
    getPosts(selectedSubreddit);
  }

  selectSubreddit(nextSubreddit) {
    const { getPosts } = this.context;
    getPosts(nextSubreddit);
  }

  handleRefreshClick(event) {
    event.preventDefault();

    const { getPosts, selectedSubreddit } = this.context;
    getPosts(selectedSubreddit);
  }

  renderLastUpdatedAt() {
    const { lastUpdated } = this.context;

    return <span>{`Last updated at ${new Date(lastUpdated).toLocaleTimeString()}.`}</span>;
  }

  renderRefreshButton() {
    const { isFetching } = this.context;

    return (
      <button
        type="button"
        onClick={(event) => this.handleRefreshClick(event)}
        disabled={isFetching}
      >
        Refresh
      </button>
    );
  }

  render() {
    const { selectedSubreddit, availableSubreddits, posts, lastUpdated, isFetching } = this.context;
    const isEmpty = posts.length === 0;
    
    return (
      <div>
        <Selector
          value={selectedSubreddit}
          onChange={(nextSubreddit) => this.selectSubreddit(nextSubreddit)}
          options={availableSubreddits}
        />
        <div>
          {lastUpdated && this.renderLastUpdatedAt()}
          {this.renderRefreshButton()}
        </div>
        {isFetching && <h2>Loading...</h2>}
        {!isFetching && isEmpty && <h2>Empty.</h2>}
        {!isFetching && !isEmpty && <Posts posts={posts} />}
      </div>
    );
  }
}

App.contextType = MyContext;

export default App;
