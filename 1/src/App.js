import "./App.css";
import Todo from "./Todo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs lg="4">
          <Todo />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
