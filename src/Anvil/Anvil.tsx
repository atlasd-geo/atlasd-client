/**
 * @description A place for pounding the iron.
 */
import React, {FC, ReactElement} from 'react';
import { LMonninger } from 'Contributors/Intros/LMonninger/LMonninger';

export type AnvilProps = {}

/**
 * @dev Put your anvil content here, so that you can wrap the content in any necessary providers down below.
 * @returns 
 */
export const Content : FC<{}> = ()=>{

    return (
        <>
            <LMonninger/>
        </>
    )

}

export const Anvil : FC<AnvilProps>  = () =>{

    return (

        <>
            <Content/>
        </>

    )

}