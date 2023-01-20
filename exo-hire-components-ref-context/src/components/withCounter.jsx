import React from "react";
import { useState } from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
    return function WithCounter (props) {

        const [count, setCount] = useState(0);
        const incrementCount = () => {
            setCount(count + incrementNumber);
        }
        const decrementCount = () => {
            setCount(count - 1);
        }
        return <WrappedComponent 
                        count={count}
                        incrementCount={incrementCount}
                        decrementCount={decrementCount}
                        {...props} 
                />;
      };

};

export default withCounter;


