import React from 'react';
import Paragraph from "./paragraph";
import {Button} from "./button";

function App() {
    // const {objectProperty} = object;
    //
    // object = {
    //     objectProperty: value
    // };

    const [count, setCount] = React.useState(0);
    // same thing as these lines below
    // const state = React.useState(0);
    // const count = state[0];
    // const setCount = state[1];

    return (
        <div>
            <p>{count}</p>
            <Button
                buttonText={'Increment'}
                onClickFunction={() => setCount(count + 1)}
            />
            <Button
                buttonText={'Decrement'}
                onClickFunction={() => setCount(count - 1)}
            />
            <Button
                buttonText={'Reset Count'}
                onClickFunction={() => setCount(0)}
            />
        </div>
    );
}

export default App;
