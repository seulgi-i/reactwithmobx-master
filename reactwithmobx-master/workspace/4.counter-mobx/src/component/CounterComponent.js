import React, { Component } from "react";
import { Button, Box } from "@material-ui/core";
import counterStore from "../store/CounterStore";
import { observer } from "mobx-react";

@observer
class CounterComponent extends Component {
  render() {
    return (
      <div>
        <Button
          onClick={() => counterStore.decrement()}
          variant="contained"
          color="primary"
          size="large"
        >
          {" "}
          -{" "}
        </Button>

        <Box component="span" m={5}>
          {" "}
          {counterStore.count}{" "}
        </Box>

        <Button
          onClick={() => counterStore.increment()}
          variant="contained"
          color="primary"
          size="large"
        >
          {" "}
          +{" "}
        </Button>
      </div>
    );
  }
}

export default CounterComponent;
