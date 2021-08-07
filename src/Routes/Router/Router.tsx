import React, {FC, ReactElement} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { DevOnly } from 'Routes/DevOnly/DevOnly';

export type RouterProps = {}

export const Router : FC<RouterProps>  = () =>{

    return (

        <BrowserRouter>
            <Switch>
                <Route path="/dev">
                    <DevOnly/>
                </Route>
            </Switch>
        </BrowserRouter>

    )

}