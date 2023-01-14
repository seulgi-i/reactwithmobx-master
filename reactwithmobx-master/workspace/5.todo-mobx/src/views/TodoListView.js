import React, { PureComponent } from "react";

import moment from "moment/moment";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core";

import { observer } from "mobx-react";

@observer
class TodoListView extends PureComponent {
  render() {
    const { todos, onSelectedTodo } = this.props;
    //실제로 받아온 데이터
    return (
      <TableContainer component={Paper}>
        <Table m={3}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(todos) && todos.length ? (
              todos.map((todo) => (
                <TableRow
                  key={todo.id}
                  hover
                  onClick={() => onSelectedTodo(todo)}
                >
                  <TableCell>{todo.title}</TableCell>
                  <TableCell>
                    {moment(todo.date).format("YYYY-MM-DD HH:mm")}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell>Empty</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default TodoListView;
