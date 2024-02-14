import User from "./User";
import UserContext from "../utils/UserContext";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }
  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }
  componentDidUpdate() {
    //  console.log("Parent ComponentDidUpdate");
  }
  componentWillUnmount() {
    //console.log("Parent componentWillUnmount");
  }
  render() {
    //console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <div>
          Logged In User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold text-xl">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is React Web Series.</h2>
        <User />
      </div>
    );
  }
}
export default About;
