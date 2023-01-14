import React, { Component } from "react";
import TodoEditFormView from "../views/TodoEditFormView";

import { inject, observer } from "mobx-react";
import autobind from "autobind-decorator";
import generateId from "../IDGenerator";

// inject -> 해당 스토어와 연결을 함. 이를통해 프롭스와 연결이 가능
// autobind 해당 클래스 안에서 일어나는 bind는 이제 모두 얘가 해줌.
// 인젝트 위에 두면 안됨.
@inject("todoStore")
@autobind
@observer
class TodoEditFormContainer extends Component {
  onSetTodoProps(name, value) {
    this.props.todoStore.setTodoProps(name, value);
  }

  onAddTodo() {
    let { todo } = this.props.todoStore;
    todo = { ...todo, id: generateId(5) };
    this.props.todoStore.addTodo(todo);
  }

  onUpdateTodo() {
    this.props.todoStore.updateTodo();
    //updateTodo호출한 다음, 뷰에서 onupdateTodo호출
  }
  onRemoveTodo() {
    this.props.todoStore.removeTodo();
  }

  render() {
    const { todoStore } = this.props;
    return (
      <TodoEditFormView
        todo={todoStore.todo}
        onSetTodoProps={this.onSetTodoProps}
        onAddTodo={this.onAddTodo}
        onUpdateTodo={this.onUpdateTodo}
        onRemoveTodo={this.onRemoveTodo}
        //업데이트 Todo넣어줬으니 실제 뷰 폴더인 todoepdltform에도 이동 ㄱ
      />
    );
    // 뷰로 내려주고 싶은 데이터를 스토어로부터 내려 꺼내줬음.그리고 해당 뷰(투두에딧폼뷰)로부터
    // 프롭스로부터 받아 적용한 것(인젝트로인해 프롭스로 내려받기가 가능)
  }
}

export default TodoEditFormContainer;
