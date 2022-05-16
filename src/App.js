import React from 'react';
import HomePage from "./HomePage";
import MainPage from './MainPage';

export default function App () {
    const [screen, setScreen] = React.useState('HomePage')
    const [meta, setMeta] = React.useState('');

    return (

        <>

        {screen === 'HomePage' ? <HomePage setScreen={setScreen} setMeta={setMeta} /> : <MainPage setScreen={setScreen} meta={meta} />}

        </>
    )
}