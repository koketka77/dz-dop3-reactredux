import Game from "./Game";
import React from 'react';
import { Provider } from "react-redux";
import './style.css'

import { createStore } from 'redux';
import reducer from "../store/reducers/reducer";

const store = createStore(reducer);

const App = () => {
    return (
        <Provider store={store}>
        <div >
            
            <Game/>
        </div>
        </Provider>
    );
}

export default App;
