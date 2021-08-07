
import renderer from "react-test-renderer";
import {
    LandingPage
} from "./LandingPage";


/**
 * @description
 */
const LandingPageJestTestSuiteO1 = ()=>{
    
    describe("LandingPage Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <LandingPage></LandingPage>
            )

        })

    })

}; LandingPageJestTestSuiteO1();