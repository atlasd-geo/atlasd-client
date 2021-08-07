/**
 * @initialAuthor Liam Monninger (l-monninger)
 * @contributors
 * Liam Monninger (l-monninger)
 * @purpose
 */
import React, {FC} from 'react';
import MediaQuery from "react-responsive";
import {
    <FTName>Desktop
} from "./[FTName]Desktop";
import {
    <FTName>Laptop
} from "./[FTName]Laptop";
import {
    <FTName>Tablet
} from "./[FTName]Tablet";
import {
    <FTName>Mobile
} from "./[FTName]Mobile"


// Assign different media screens to their respective components.
// This can be used to avoid redundant dev for components which do not need
// different versions for each media screens.
const Desktop = <FTName>Desktop;
const Laptop = <FTName>Laptop;
const Tablet= <FTName>Tablet;
const Mobile = <FTName>Mobile;


/**
 * @description
 */
export type <FTName>Props = {}

/**
 * @description 
 */
export const <FTName> : FC<<FTName>Props>  = (props) =>{

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