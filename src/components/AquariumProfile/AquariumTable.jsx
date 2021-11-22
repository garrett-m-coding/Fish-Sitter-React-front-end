import React from 'react';
import Table from 'react-bootstrap/Table';



const AquariumTable = (props) => {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Edit</th>
                    <th>Name</th>
                    <th>Water Capacity</th>
                    <th>Currently Active</th>
                    <th>Fish</th>
                    <th>Food</th>
                    <th>Plants</th>
                    <th>Water Parameters</th>
                </tr>
            </thead>
            {props.mapAquariums()}
        </Table>
    );
}

export default AquariumTable;