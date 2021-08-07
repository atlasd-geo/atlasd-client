import React, {FC} from 'react';
import {Card} from "react-bootstrap";

/**
 * @initialAuthor Liam Monninger (l-monninger)
 * @contributors
 * Liam Monninger (l-monninger)
 */

/**
 * @description Props expected by the ContributorIntroDesktop.
 */
export type ContributorIntroDesktopProps = {
    name : string,
    profilePicUrl: string
}

/**
 * @description FC for contributor intro on Desktop devices.
 * @returns The ContributorIntro ReactNode
 */
export const ContributorIntroDesktop : FC<ContributorIntroDesktopProps>  = ({name, profilePicUrl}) =>{

    return (

            <Card style={{
                width: "18rem"
            }} >
                <Card.Img src={profilePicUrl}/>
                <Card.Title>
                    {name}
                </Card.Title>
            </Card>
    

    )

}