import React from 'react';
import ReactDOM from 'react';

const rootDivElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootDivElement);

function App(){
    return <h1>Hola Mundo</h1>
};

root.render(<App/>);