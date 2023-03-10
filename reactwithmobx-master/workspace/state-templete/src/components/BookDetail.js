import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  root: {
    maxWidth: 450,
  },
  media: {
    width: "70%",
    heigh: "70%",
  },
};
class BookDetail extends Component {
  render() {
    const { book, classes } = this.props;

    return (
      <Card className={classes.root}>
        <CardHeader title={book.title} subheader={book.author} />
        <CardMedia
          className={classes.media}
          componant="img"
          image={book.imgUrl}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {book.introduce}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
export default withStyles(styles)(BookDetail);
