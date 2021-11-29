import React from 'react';
import Table from 'react-bootstrap/Table';



const WaterParamsTable = (props) => {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Edit</th>
                    <th>Water Params ID</th>
                    <th>General Hardness</th>
                    <th>Carbonate Hardness</th>
                    <th>pH (Power of Hydrogen)</th>
                    <th>Nitrites</th>
                    <th>Nitrates</th>
                    <th>Temperature (Fahrenheit)</th>
                    <th>Water Changed?</th>
                    <th>Gallons of Water Added?</th>
                    <th>Date of Measurements</th>
                    <th>Before Noon?</th>
                    <th>After Noon?</th>
                    <th>Actions</th>
                </tr>
            </thead>
            {props.mapWaterParams()}
        </Table>
    );
}

export default WaterParamsTable;