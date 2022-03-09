import React, { Component } from "react";
import Todoform from "./Todoform";
import Todolist from "./Todolist";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isedit: false,
      id: null,
      value: [],
      list: [
        // { id: 1, todo: "do homeworks" },
        // { id: 2, todo: "go gym" },
      ],
    };

    this.addtodo = this.addtodo.bind(this);
    this.removetodo = this.removetodo.bind(this);
  }

  componentDidMount() {
    this.setState({
      list: [
        { id: 1, todo: "do homeworks" },
        { id: 2, todo: "go gym" },
      ],
    });
  }

  setinputvalue = (e) => {
    this.setState({ value: e.target.value });
  };

  idgenerator = () => Math.floor(100000 + Math.random() * 900000);

  addtodo() {
    if (!this.state.value.length) {
      alert("please fill the blanket first !");
      return;
    }
    if (this.state.isedit) {
      const copytodolist = this.state.list;
      const index = copytodolist.findIndex((item) => item.id === this.state.id);
      copytodolist[index].todo = this.state.value;
      this.setState({ list: copytodolist, value: "", id: null, isedit: false });
      console.log("edit");
    } else {
      this.setState({
        list: [
          { id: this.idgenerator(), todo: this.state.value },
          ...this.state.list,
        ],
        value: "",
      });
    }
  }

  removetodo(item) {
    let list = this.state.list.filter((l) => l !== item);
    this.setState({ list: list });
  }

  edittodo = (item) => {
    this.setState({ value: item.todo, id: item.id, isedit: true });
  };

  render() {
    console.log("hello world!");
    return (
      <div>
        <Todoform
          setinputvalue={this.setinputvalue}
          value={this.state.value}
          addtodo={this.addtodo}
        />

        <Todolist
          list={this.state.list}
          remove={this.removetodo}
          edit={this.edittodo}
        />
      </div>
    );
  }
}

export default Todo;
