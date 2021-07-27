import React from 'react';
import {Row,Col,Card,CardText, CardTitle,Button} from 'reactstrap';

function TodoList(props){
    const items = props.items;
    const listItems = items.map(item=>{
        return(
            <div className="list mt-4" key={item.key}>
                <Row xs="12">
                <Col xs="5">
                    <Card className="text-center">
                        <CardTitle tag="h5">To do</CardTitle>
                        <CardText>
                            {item.text}
                        </CardText>
                        <Button
                        onClick={()=> props.deleteItem(item.key)}>Delete</Button>
                    </Card>
                </Col>
                </Row>
            </div>
        );
    })
    return(
        <div>{listItems}</div>
    );
}

export default TodoList;