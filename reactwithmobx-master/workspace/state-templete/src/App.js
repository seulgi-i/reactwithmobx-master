import { Container, Grid } from "@material-ui/core";
import React, { Component } from "react";

import SearchBar from "./components/SearchBar";

import BookList from "./components/BookList";
import Books from "./static_data/Books";
import BookDetail from "./components/BookDetail";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: Books,
      selectedBook: Books[0],
    };
  }

  onSearchTitle(title) {
    let updateList = Books;
    updateList = updateList.filter((book) => {
      return book.title.toLowerCase().search(title.toLowerCase()) !== -1;
    });
    //업데이리스트에 있는 책 한권을 가져와서 리턴을 함. 필터를 넣고 대소문자 상관 없이 검색하고
    //(문자열)스트링 객체가 가지고 있는 search 메소드를통해서  파라미터로 받는
    //toLowerCase 값과 비교해서 -1이 아니라면 해당 문자열을 포함하고 있는 거니
    //true 반환(1). true를 반환하면 List에 포함한다.
    this.setState({
      books: updateList,
    });
    // 위 문자열을 포함하는 북개체들을 포함할 것들 - > state값을 변경
  }

  onSelectedBook(book) {
    this.setState({
      selectedBook: book,
    });
  }

  render() {
    return (
      <Container>
        <SearchBar onSearchTitle={this.onSearchTitle.bind(this)} />
        {/* 위 결과를 전달을 해준다. 써치바에 프롭스형태로 전달. 꼭 this에대한
         bnding처리를 해야한다.  */}
        <Grid container spacing={2}>
          <Grid item>
            <BookList
              onSelectedBook={this.onSelectedBook.bind(this)}
              books={this.state.books}
            />
          </Grid>
          <Grid item>
            <BookDetail book={this.state.selectedBook} />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default App;
