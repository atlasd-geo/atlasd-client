
import renderer from "react-test-renderer";
import {
    LandingPageTablet
} from "./LandingPageTablet";


/**
 * @description
 */
const LandingPageTabletJestTestSuiteO1 = ()=>{
    
    describe("LandingPageTablet Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <LandingPageTablet></LandingPageTablet>
            )

        })

    })

}; LandingPageTabletJestTestSuiteO1();