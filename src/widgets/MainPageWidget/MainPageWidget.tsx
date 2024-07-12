import { Container, Card, Row, Col } from "react-bootstrap"
import { TheNavbar, TheFooter } from "@/shared/components"

const MainPage = () => {
  return (
    <main className="main-page">
      <TheNavbar />

      <Container className="my-4">
        <Row className="mb-4 d-flex">
          <Col md={4} className="d-flex">
            <Card className="h-100 w-100">
              <Card.Body>
                <Card.Title>Bitcoin</Card.Title>
                <Card.Text>Bitcoin is a decentralized digital currency without a central bank or single administrator.</Card.Text>
                <Card.Link href="#">Learn More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex">
            <Card className="h-100 w-100">
              <Card.Body>
                <Card.Title>Ethereum</Card.Title>
                <Card.Text>Ethereum is an open-source, blockchain-based, decentralized software platform used for its own cryptocurrency, ether.</Card.Text>
                <Card.Link href="#">Learn More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex">
            <Card className="h-100 w-100">
              <Card.Body>
                <Card.Title>Litecoin</Card.Title>
                <Card.Text>Litecoin is a peer-to-peer cryptocurrency and open-source software project released under the MIT/X11 license.</Card.Text>
                <Card.Link href="#">Learn More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-4 d-flex">
          <Col md={4} className="d-flex">
            <Card className="h-100 w-100">
              <Card.Body>
                <Card.Title>Bitcoin</Card.Title>
                <Card.Text>Bitcoin is a decentralized digital currency without a central bank or single administrator.</Card.Text>
                <Card.Link href="#">Learn More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex">
            <Card className="h-100 w-100">
              <Card.Body>
                <Card.Title>Ethereum</Card.Title>
                <Card.Text>Ethereum is an open-source, blockchain-based, decentralized software platform used for its own cryptocurrency, ether.</Card.Text>
                <Card.Link href="#">Learn More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex">
            <Card className="h-100 w-100">
              <Card.Body>
                <Card.Title>Litecoin</Card.Title>
                <Card.Text>Litecoin is a peer-to-peer cryptocurrency and open-source software project released under the MIT/X11 license.</Card.Text>
                <Card.Link href="#">Learn More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex">
          <Col md={4} className="d-flex">
            <Card className="h-100 w-100">
              <Card.Body>
                <Card.Title>Bitcoin</Card.Title>
                <Card.Text>Bitcoin is a decentralized digital currency without a central bank or single administrator.</Card.Text>
                <Card.Link href="#">Learn More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex">
            <Card className="h-100 w-100">
              <Card.Body>
                <Card.Title>Ethereum</Card.Title>
                <Card.Text>Ethereum is an open-source, blockchain-based, decentralized software platform used for its own cryptocurrency, ether.</Card.Text>
                <Card.Link href="#">Learn More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex">
            <Card className="h-100 w-100">
              <Card.Body>
                <Card.Title>Litecoin</Card.Title>
                <Card.Text>Litecoin is a peer-to-peer cryptocurrency and open-source software project released under the MIT/X11 license.</Card.Text>
                <Card.Link href="#">Learn More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <TheFooter />
    </main>
  )
}

export default MainPage
