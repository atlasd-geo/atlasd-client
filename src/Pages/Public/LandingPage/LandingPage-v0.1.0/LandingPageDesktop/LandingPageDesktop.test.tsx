
import renderer from "react-test-renderer";
import {
    LandingPageDesktop
} from "./LandingPageDesktop";


/**
 * @description
 */
const LandingPageDesktopJestTestSuiteO1 = ()=>{
    
    describe("LandingPageDesktop Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <LandingPageDesktop></LandingPageDesktop>
            )

        })

    })

}; LandingPageDesktopJestTestSuiteO1();