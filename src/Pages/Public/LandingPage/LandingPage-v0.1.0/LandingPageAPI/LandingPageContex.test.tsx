
import renderer from "react-test-renderer";
import {
    LandingPageProvider,
    useLandingPageContext
} from "./LandingPageContext";


/**
 * @description
 */
const LandingPageContextJestTestSuiteO1 = ()=>{
    
    describe("LandingPageContext Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <LandingPageProvider></LandingPageProvider>
            )

        })

    })

}; LandingPageContextJestTestSuiteO1();