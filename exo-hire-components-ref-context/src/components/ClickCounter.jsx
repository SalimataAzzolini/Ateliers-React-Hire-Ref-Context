import React from 'react';
import withCounter from './withCounter';

const ClickCounter = (props) => {
    const {count, incrementCount, decrementCount} = props;
    return (
        <div>
            <h6> {count}</h6>
            <button onClick={incrementCount}> Incrememt </button>
            <button onClick={decrementCount}> Decremente </button>
        </div>
    );
};

export default withCounter (ClickCounter, 5);