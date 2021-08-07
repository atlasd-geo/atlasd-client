import React, {FC, ReactElement} from 'react';
import { Switch, Route } from "react-router-dom";
import {Anvil} from "Pages/DevPages/Anvil";

export type DevOnlyProps = {}

export const DevOnly : FC<DevOnlyProps>  = () =>{

    return (

        <Switch>
            <Route path="/dev/anvil">
                <Anvil/>
            </Route>
        </Switch>

    )

}