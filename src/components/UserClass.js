import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log(this.state.userInfo.name + "child constructor");
  }
  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("this is set");
    }, 1000);
    console.log(this.state.userInfo.name + "child componentDidMount");
    const data = await fetch("https://api.github.com/users/priyasingla17");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });

    console.log(json);
  }
  componentDidUpdate() {
    console.log("Child componentDidUpdate");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Child componentWillUnmount");
  }
  render() {
    console.log(this.state.userInfo.name + "child render");
    const { login, id, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {login}</h2>
        <h3>Location: {id}</h3>
        <h4>Contact: @akshaymarch7</h4>
      </div>
    );
  }
}
export default UserClass;
