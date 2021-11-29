import React from 'react';
import Table from 'react-bootstrap/Table';



const FishTable = (props) => {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Edit</th>
                    <th>Fish ID</th>
                    <th>Fish Type</th>
                    <th>Alive?</th>
                    <th>Number of Fish</th>
                    <th>Actions</th>
                </tr>
            </thead>
            {props.mapFishes()}
        </Table>
    );
}

export default FishTable;