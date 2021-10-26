import React, { useEffect }  from 'react';
import Game from './components/game';

const App = () => {
    useEffect(() => {
        document.title = "tic-tac-toe react E3CCSN"
    }, [])
    console.log("test");

    return <Game/>;
}

export default App;