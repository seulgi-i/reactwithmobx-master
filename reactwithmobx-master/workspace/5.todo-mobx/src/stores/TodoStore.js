import { observable, action, computed, makeObservable, toJS } from 'mobx'; // eslint-disable-line no-unused-vars
class TodoStore {
    constructor() {
        makeObservable(this);
    }
    @observable
    _todo = {
        title: '',
    }; //id, title, date
    //인터넷에서 입력한 값이 입력되는 위치 _todo

    @observable
    _todos = [];

    get todo() {
        return this._todo;
    }

    get todos() {
        return toJS(this._todos);
    }
    // 이 투두에서는 타이틀과 데이트가 들어갈 것.
    // 네임에는 타이틀, 벨류에는 타이틀의 값
    // 데이트일 때는 데이틀, 벨류에는 데이트의 값...

    @action
    setTodoProps(name, value) {
        //타이틀이 바뀔 때 데이트가 지워지면 안되기 때문에
        this._todo = {
            ...this._todo,
            [name]: value,
        };
    }

    @action
    addTodo(todo) {
        this._todos.push(todo);
        // 해당 파라미터로 받은 todo객체를 추가
    }

    @action
    selectedTodo(todo) {
        this._todo = todo;
        //이 메소드가 호출되면서 선택된 투두가 넘어온다.
    }

    @action
    updateTodo() {
        let foundTodo = this._todos.find((todo) => todo.id === this._todo.id);
        foundTodo.title = this._todo.title;
        foundTodo.date = this._todo.date;

        this._todo = {};

        //todo객체를 todos에서 찾아야 함. 배열로부터 find란 메소드를 이용해 찾고, todo라 이름 짓고 찾음
        // 해당 todo객체르는 tho._todo.id와 비교하여 현재 선택된 to의 데이터를 find에 가져올 수 있다.
        // foundTodo.title 을 this._todo.title;로 바꿔준다.
        //  foundTodo.date을 this._todo.date로 바꾸준다.
        // this._todo 를 아무것도 없는 리터럴 객체 {};로 채워준다.
        // 그러면 지금 이 업데이트투두 또한 todos또한 데이트의 변경이기때문에 액션메서드이므로 action api로 설정해준다.
        //진심 이해 1도 안감 아무튼 여기서  TodoedioformContainer로 이동
    }

    @action
    removeTodo() {
        let index = this._todos.findIndex((todo) => todo.id === this._todo.id);
        if (index > -1) {
            this._todos.splice(index, 1);
        }
        this._todo = {};
        //지우고자하는 투두스의 인덱스를 찾으면 된다. findIndex라는 메소드를 이용해서 변수 인덱스에 넣어준다
        //한번 확인을 한다. -1보다 크다면 찾은 것.
        // splice함수를 사용하여 index부터 1개를 삭제 하겠다.
        // this._todo = {};를 비워주겠다.
    }
}

export default new TodoStore();
