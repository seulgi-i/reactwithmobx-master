import "date-fns";
import { PureComponent } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

class TodoEditFormView extends PureComponent {
  render() {
    const { todo, onSetTodoProps, onAddTodo, onUpdateTodo, onRemoveTodo } =
      this.props;
    // 뷰에 이동됐던 updateto를 onupdatetodo로 넣어줌 그리고 업데이트버튼 onclick활성화
    return (
      <form noValidate>
        <Grid container xs={12} spacing={3}>
          <Grid item xs={3}>
            <TextField
              margin="normal"
              id="outlined-basic"
              label="Title"
              variant="standard"
              value={todo && todo.title ? todo.title : ""}
              // todo에title이 있는지 확인을 하고, 타이틀이 있다면 타이틀을 집어넣고
              // 없으면 빈 문자열을 집어넣는다.(value)
              onChange={(event) => onSetTodoProps("title", event.target.value)}
              //onChange가 일어날 때 이벤트를 받을 거다(파라미터로)
              //이 때 온셋투두프롭스를 호출하면서 지금 바꾼 건 텍스트필드이므로
              //  네임이 타이틀이 되고 실제 값은 이벤트의 타겟의 벨류가 된다.
              // 이러면 이벤트 발생할 때마다 그 값을
              // 타이틀이란 이름으로 onSetTodoProps를 통해서 스토어가 가지고 있는
              // SetTodoProps로 전달이 될 것.
            />
          </Grid>
          <Grid item xs={3}>
            {/** 달력 */}
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date"
                format="yyyy-MM-dd"
                value={todo && todo.date ? todo.date : null}
                onChange={(date) => onSetTodoProps("date", date.valueOf())}
                //바뀌면 값을 바꿔준다.
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            onClick={onAddTodo}
          >
            Add
          </Button>
          &nbsp;&nbsp;
          <Button
            variant="contained"
            color="default"
            startIcon={<UpdateIcon />}
            onClick={onUpdateTodo}
            // 업데이트 기능완.
          >
            Update
          </Button>
          &nbsp;&nbsp;
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={onRemoveTodo }
          >
            Delete
          </Button>
          &nbsp;&nbsp;
        </Grid>
      </form>
    );
  }
}

export default TodoEditFormView;
