import React, { Component } from "react";
import { Button, List, ListItemText } from "@material-ui/core";
import axios from "axios";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        //배열객체 지정
        {
          id: "",
          name: "",
        },
      ],
    };
  }

  loadUsers() {
    // 엑시오스를 통해 url을 가져올 것. 겟방식으로.  해당 결과를 가져오게 되면 그 결과값을 response 객체에
    // 담는다 그걸 setState에 세팅한다.
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      this.setState({
        users: response.data,
      });
    });
  }



  componentDidMount() {
    this.loadUsers();
  }

  render() {
    const usersList = this.state.users.map((user) => {
      return <ListItemText primary={user.name} key={user.id} />;
      // primary에 유저에대한 정보를 집어넣어준다. List에 추가되는 값는 key값을 가져야한다.
      // 이렇게 된 걸 List에 지정을 해 준다. 밑에!
    });

    return (
      <div>
        {/* <Button
          onClick={this.loadUsers.bind(this)}
          variant="contained"
          color="primary"
        >
          Load
        </Button> */}
        <List>{usersList}</List>
        {/* 위에 지정해준 것을 지정 받음. */}
      </div>
    );
  }
}

export default UserList;
