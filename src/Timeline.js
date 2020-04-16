import React, { Component } from 'react';
import './bootstrap.min.css';
import './Timeline.css';


// Add a json content 
const activity = {
  timestamp: new Date().getTime(),
  text: "Ate lunch",
  user: {
    id: 1,
    name: 'Nate',
    avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
  },
  comments: [
    { from: 'Ari', text: 'Me too!' }
  ]
}


// @Done implement Header componenet
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="menuIcon">
          <div className="dashTop"></div>
          <div className="dashBottom"></div>
          <div className="circle"></div>
        </div>

        <span className="title pt-3">
          {this.props.title}
        </span>

        <input
          type="text"
          className="searchInput"
          placeholder="Search ..." />

        <div className="fa fa-search searchIcon"></div>
      </div>
    )
  }
}

// @Done implement timeline component
class Content extends React.Component {
  render() {
    const {activity} = this.props; // ES6 destructuring
    // it is same as writing:  const activity = this.props.activity;
    return (
      <div className="content">
        <div className="line"></div>

      {/* Timeline item */}
        <div className="item">
          <div className="avatar">
            <img 
            alt= {activity.text}
            src= {activity.user.avatar} />
            {activity.user.name}
          </div>

          <span className="time">
              {activity.timestamp}
          </span>
          <p>Ate lunch</p>
          <div className="commentCount">
            {activity.comments.length}
          </div>
        </div>

        {/* ... */}

      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="notificationsFrame container">
        <div className="panel">
          <Header title="Timeline" />
          <Header title="Profile" />
          <Header title="Settings" />
          <Header title="Chat" />
          <Content activity={activity}/>
        </div>
      </div>
    )
  }
}
export default App;