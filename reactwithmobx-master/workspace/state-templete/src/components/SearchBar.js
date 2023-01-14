import React, { Component } from "react";

import { TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
class SearchBar extends Component {
  render() {
    const { onSearchTitle } = this.props;
    // App.js에서 보낸 걸 받는다. props로.
    return (
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={(event) => onSearchTitle(event.target.value)}
        //text필드 안에서 onChage로 App.js에서 받은 Value값을 받기위해 이벤트 실행하여 value값 실행
      />
    );
  }
}

export default SearchBar;
