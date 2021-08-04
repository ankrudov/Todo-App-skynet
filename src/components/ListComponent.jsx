import React from 'react';
import {Row,Col,Card,CardText, CardTitle,Button} from 'reactstrap';
import  './componentstyling.css';

function TodoList(props){
    const items = props.items;
    const listItems = items.map(item=>{
        return(
            <div className="list mt-4" key={item.key}>
                <Row xs="12">
                    <Col xs="12" md="5">
                        <Card className="text-center todo-card">
                            <CardTitle className="card-title" tag="h5">To do</CardTitle>
                            <CardText className="card-text">
                                {item.text}
                            </CardText>
                            <Button className="delete-button"
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