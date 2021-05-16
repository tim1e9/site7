import React from 'react';
import {Route} from 'react-router-dom'
import Welcome from '../components/Welcome'
import Charters from '../components/Charters'
export default function Routes() {
    return (
        <>
            <Route path="/" exact={true} component={Welcome} />
            <Route path="/charters" exact={true} component={Charters} />
        </>
    )
}