import React from 'react';
import HomePage from "./HomePage";
import MainPage from './MainPage';

export default function App () {
    const [screen, setScreen] = React.useState('HomePage')

    return (

        <>

        {screen === 'HomePage' ? <HomePage setScreen={setScreen} /> : <MainPage />}

        </>
    )
}