import React from "react";
import { NavLink } from "react-router-dom";
import {} from "@material-ui/core";

class ReadPage extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.href);
  }

  render() {
    return (
      <div>
        <h1>Read Manga</h1>
        <NavLink to="/">[Temp]Back to List</NavLink>
      </div>
    );
  }
}

export default ReadPage;
