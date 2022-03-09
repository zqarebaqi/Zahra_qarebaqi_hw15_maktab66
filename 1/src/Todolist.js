import React, { Component } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";

class Todolist extends Component {
  render() {
    return (
      <ListGroup as="ol" numbered className="mx-3">
        {this.props.list.map((item) => (
          <ListGroup.Item
            key={item.id}
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto"> {item.todo}</div>
            <a
              //   variant="link"
              className="me-3"
              onClick={() => this.props.remove(item)}
            >
              <BsTrash />
            </a>
            <a variant="success" onClick={() => this.props.edit(item)}>
              <GrEdit />
            </a>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default Todolist;
