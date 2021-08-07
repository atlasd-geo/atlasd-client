/**
 * @initialAuthor Liam Monninger (l-monninger)
 * @contributors
 * Liam Monninger (l-monninger)
 * @purpose Provide a standard component for the introduction activity.
 */
import React, {FC} from 'react';
import MediaQuery from "react-responsive";
import {
    ContributorIntroDesktop
} from "./ContributorIntroDesktop";
import {
    ContributorIntroLaptop
} from "./ContributorIntroLaptop";
import {
    ContributorIntroTablet
} from "./ContributorIntroTablet";
import {
    ContributorIntroMobile
} from "./ContributorIntroMobile"


// Assign different media screens to their respective components.
// This can be used to avoid redundant dev for components which do not need
// different versions for each media screens.
const Desktop = ContributorIntroDesktop;
const Laptop = ContributorIntroLaptop;
const Tablet= ContributorIntroTablet;
const Mobile = ContributorIntroMobile;


/**
 * @description Props expected by the contributor intro.
 */
export type ContributorIntroProps = {
    name : string,
    profilePicUrl: string
}

/**
 * @description FC for contributor intro.
 */
export const ContributorIntro : FC<ContributorIntroProps>  = (props) =>{

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