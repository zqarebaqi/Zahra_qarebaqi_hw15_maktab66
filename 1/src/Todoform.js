import React, { Component } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";

class Todoform extends Component {
  render() {
    return (
      <Container className="mt-5  ">
        <Row>
          <Col xs="10">
            <Form.Group className="mb-3 " controlId="formBasicPassword">
              <Form.Control
                className="bg-light"
                type="text"
                placeholder="i have to do ... "
                value={this.props.value}
                onChange={(e) => {
                  this.props.setinputvalue(e);
                }}
              />
            </Form.Group>
          </Col>
          <Col xs="2">
            <Button
              variant="outline-info"
              type="submit"
              onClick={this.props.addtodo}
            >
              Add
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Todoform;
