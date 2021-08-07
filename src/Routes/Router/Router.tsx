import React, {FC, ReactElement} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { DevOnly } from 'Routes/DevOnly/DevOnly';
import { LandingPage } from 'Pages/Public/LandingPage';

export type RouterProps = {}

export const Router : FC<RouterProps>  = () =>{

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LandingPage/>
                </Route>
                <Route path="/dev">
                    <DevOnly/>
                </Route>
            </Switch>
        </BrowserRouter>

    )

}