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
            <MediaQuery minDeviceWidth={1200}>
                <Desktop {...props}>{props.children}</Desktop>
            </MediaQuery>   
            <MediaQuery minDeviceWidth={992} maxDeviceWidth={1199}>
                <Laptop {...props}>{props.children}</Laptop>
            </MediaQuery>
            <MediaQuery minDeviceWidth={768} maxDeviceWidth={991}>
                <Tablet {...props}>{props.children}</Tablet>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={767}>
                <Mobile {...props}>{props.children}</Mobile>
            </MediaQuery>
        </>

    )

}