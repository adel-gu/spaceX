// React-bootstrap components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const DragonItem = ({name, type, description, img}) => {
  return (
    <li>
      <Card className="flex-md-row border-0 mb-5">
        <Card.Img style={{ maxWidth: '18rem', height: "18rem" }} variant="left" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{type}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Reserve Dragon</Button>
        </Card.Body>
      </Card>
    </li>
  );
}
export default DragonItem;
