import React, { Component } from "react";
import { List, ListItem, Container } from "@mui/material";
import BookListItem from "./BookListItem";

class BookList extends Component {
  render() {
    // const books = this.props.books; map함수를 돌면서 books안에 있는 값들을
    const { books } = this.props;
    //props로부터 books를 받았다.
    //books는 배열이다. 그래서 매핑하기위한 맵 함수가 사용이 가능하다.
    //애로우펑션으로 하나의 북개체가 나오게되면 이 반복문을 통해
    //리턴이 된다. 리스트 아이템과 북리스트아이템을 제작!

    const bookItems = books.map((book) => {
      return (
        <ListItem key={book.ISBN}>
          <BookListItem book={book} />
        </ListItem>
      );
    });
    return (
      <Container maxWidth="sm">
        <List>{bookItems}</List>
      </Container>
    );
    // 이렇게하면 전체 책을 List형태로 불러온다.
  }
}

export default BookList;
