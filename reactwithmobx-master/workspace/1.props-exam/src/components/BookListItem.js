import React, { Component } from "react";
import { Paper, Grid, Typography } from "@mui/material";

class BookListItem extends Component {
  render() {
    const { book } = this.props;
    return (
      <Paper>
        <Grid container spacing={2}>
          <Grid item>
            <img src={book.imgUrl} />
          </Grid>
          <Grid item>
            <Typography component="h5" variant="h5">
              {book.title}
            </Typography>
            <Typography gutterBottom>{book.author}</Typography>
            <Typography color="textSecondary">{book.introduce}</Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default BookListItem;
