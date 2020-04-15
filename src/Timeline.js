import React, { Component } from 'react';
import './Timeline.css';


// @TODO implement Header componenet
class Header extends React.Component{
  render() {
    return (
      <div className="header">
        <div className="fa fa-more">
        </div>
        <span className="title">Timeline</span>

        <input
          type="text"
          className="searchInput"
          placeholder="Search ..." />

        <div className="fa fa-search searchIcon"></div>
      </div>
    );
  }
}

// @TODO implement timeline component
class Content extends React.Component{
  render(){
    return (<div></div>);
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Header />
          <Content />
        </div>
      </div>
    )
  }
}
export default App;