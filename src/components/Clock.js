import React, {useState} from 'react';
import {Alert} from "react-bootstrap";

function Clock(props) {
    const [time, setTime] = useState(new Date());
    return (
        <Alert variant="primary">
            {time.toTimeString()}
        </Alert>
        );
}

export default Clock;