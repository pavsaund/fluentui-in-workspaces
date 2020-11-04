import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// import '@shared/styles';
import './App.scss';

/* eslint-disable no-restricted-globals */
export default function App() {
    const [counter, setCounter] = useState(42);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter + 2);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    });

    return (
        <>
            <div className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm12">
                        <h1>Title</h1>
                        <strong>{counter}</strong>
                    </div>
                </div>
            </div>
            {/* <Sample something={counter} /> */}
        </>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);