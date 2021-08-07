import {
    Anvil
} from "./Anvil";
import {describe, it, expect} from "local-cypress"


/**
 * @description
 */
const AnvilCypressTestSuiteO1 = ()=>{

    // All
    describe(
        "Anvil Cypress Test Suite 01 - All Browsers",
        ()=>{


        }
    )
    
    // Chrome
    describe(
        "Anvil Cypress Test Suite 01 - Chrome", 
        { browser : "chrome"},
        ()=>{

        }
    )

    // Chromium 
    describe(
        "Anvil Cypress Test Suite 01 - Chromium", 
        { browser : "chromium"},
        ()=>{

        }
    )

    // Electron
    describe(
        "Anvil Cypress Test Suite 01 - Electron", 
        { browser : "electron"},
        ()=>{

        }
    )

    // Firefox
    describe(
        "Anvil Cypress Test Suite 01 - Firefox", 
        { browser : "firefox"},
        ()=>{


        }
    )

    // Edge
    describe(
        "Anvil Cypress Test Suite 01 - Edge", 
        { browser : "edge"},
        ()=>{


        }
    )


}; AnvilCypressTestSuiteO1();