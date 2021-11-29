import React from 'react';
import Table from 'react-bootstrap/Table';



const FoodTable = (props) => {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Edit</th>
                    <th>Food ID</th>
                    <th>Food Type</th>
                    <th>Fed Food?</th>
                    <th>Date Fed</th>
                    <th>Before Noon?</th>
                    <th>After Noon?</th>
                    <th>Actions</th>
                </tr>
            </thead>
            {props.mapFoods()}
        </Table>
    );
}

export default FoodTable;