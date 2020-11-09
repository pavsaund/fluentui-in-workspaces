import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@fluentui/react';

// import '@shared/styles';
import './App.scss';

/* eslint-disable no-restricted-globals */
export default function App() {
    const [counter, setCounter] = useState(42);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });

    const  handleClick = () => {
       setCounter(counter + 100);
    };

    return (
        <>
            <div className='ms-Grid' dir='ltr'>
                <div className='ms-Grid-row'>
                    <div className='ms-Grid-col ms-sm12'>
                        <h1>Title</h1>
                        <strong>{counter}</strong>
                        <Button onClick={() => handleClick()}>Add 100!</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
