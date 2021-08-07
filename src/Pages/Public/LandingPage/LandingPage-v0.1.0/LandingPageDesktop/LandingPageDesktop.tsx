import React, {FC} from 'react';
import { AtlasIsMod } from 'Components/Icons/AtlasIsMod';

/**
 * @initialAuthor
 * @contributors
 */

/**
 * @description
 */
export type LandingPageDesktopProps = {}

/**
 * @description 
 */
export const LandingPageDesktop : FC<LandingPageDesktopProps>  = () =>{

    return (

        <div style={{
            height: "100vh",
            width: "100vw",
            backgroundColor: "#003535",
            display: "grid",
            justifyContent: "center",
            justifyItems: "center",
            alignContent: "center",
            alignItems: "center",
            color: "white"
        }}>
            <AtlasIsMod/>
            <br/>
            <h1>&ensp;Atlasd&ensp;</h1>
        </div>

    )

}