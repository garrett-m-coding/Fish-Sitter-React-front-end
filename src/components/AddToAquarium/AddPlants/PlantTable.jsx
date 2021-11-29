import React from 'react';
import Table from 'react-bootstrap/Table';



const PlantTable = (props) => {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Edit</th>
                    <th>Plant ID</th>
                    <th>Plant Type</th>
                    <th>Plant Trimmed?</th>
                    <th>Date Trimmed?</th>
                    <th>Actions</th>
                </tr>
            </thead>
            {props.mapPlants()}
        </Table>
    );
}

export default PlantTable;