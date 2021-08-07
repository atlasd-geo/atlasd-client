
import renderer from "react-test-renderer";
import {
    LandingPageMobile
} from "./LandingPageMobile";


/**
 * @description
 */
const LandingPageMobileJestTestSuiteO1 = ()=>{
    
    describe("LandingPageMobile Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <LandingPageMobile></LandingPageMobile>
            )

        })

    })

}; LandingPageMobileJestTestSuiteO1();