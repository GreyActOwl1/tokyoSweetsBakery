import { Container, Row, Col } from "reactstrap";
import FeaturedProductDisplay from "../components/FeaturedProductDisplay";

const HomePage = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <FeaturedProductDisplay />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
