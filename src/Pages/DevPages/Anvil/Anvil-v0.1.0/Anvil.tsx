/**
 * @initialAuthor Liam Monninger (l-monninger)
 * @contributors
 * Liam Monninger (l-monninger)
 * @purpose
 */
import React, {FC} from 'react';
import MediaQuery from "react-responsive";
import {
    AnvilDesktop
} from "./AnvilDesktop";
import {
    AnvilLaptop
} from "./AnvilLaptop";
import {
    AnvilTablet
} from "./AnvilTablet";
import {
    AnvilMobile
} from "./AnvilMobile"


// Assign different media screens to their respective components.
// This can be used to avoid redundant dev for components which do not need
// different versions for each media screens.
const Desktop = AnvilDesktop;
const Laptop = AnvilLaptop;
const Tablet= AnvilTablet;
const Mobile = AnvilMobile;


/**
 * @description
 */
export type AnvilProps = {}

/**
 * @description 
 */
export const Anvil : FC<AnvilProps>  = (props) =>{

    return (

        <>
            <MediaQuery minWidth={1200}>
                <Desktop {...props}>{props.children}</Desktop>
            </MediaQuery>   
            <MediaQuery minWidth={992} maxWidth={1199}>
                <Laptop {...props}>{props.children}</Laptop>
            </MediaQuery>
            <MediaQuery minWidth={768} maxWidth={991}>
                <Tablet {...props}>{props.children}</Tablet>
            </MediaQuery>
            <MediaQuery maxWidth={767}>
                <Mobile {...props}>{props.children}</Mobile>
            </MediaQuery>
        </>

    )

}