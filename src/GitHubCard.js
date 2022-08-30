import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Derek-image.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          My name is Derek and I'm trying to learn programing.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>GitHub User Name</ListGroup.Item>
        <ListGroup.Item>DerekHarwood</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default GitHubCard;