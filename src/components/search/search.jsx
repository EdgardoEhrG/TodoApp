import React, { Component } from "react";

import "./search.scss";

export default class Search extends Component {
  /* ================ State ================ */

  state = {
    term: "",
  };

  /* ================ Handlers ================ */

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  /* ================ Render ================ */

  render() {
    const { term } = this.state;
    return (
      <input
        className="form-control search-input"
        value={term}
        onChange={this.onSearchChange}
        placeholder="Search"
      />
    );
  }
}
