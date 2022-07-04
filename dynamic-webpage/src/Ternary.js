
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function Ternary() {
    /**
     * Challenge: move our ternary directly inside of the JSX
     * so the "Yes" and "No" are determined inside the <h1>
     * 
     * Hint: you will no longer need the `answer` variable
     */
    const isGoingOut = false
    
    return (
        <div>
            <Card className="text-center">
                <Card.Header>Learn Tenary Operation</Card.Header>
                <Card.Body>
                    <Card.Title>Do I feel like going out tonight?</Card.Title>
                    <Badge bg="info">{isGoingOut ? "Yes" : "No"}</Badge>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default Ternary