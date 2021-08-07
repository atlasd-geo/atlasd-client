
import renderer from "react-test-renderer";
import {
    LandingPageLaptop
} from "./LandingPageLaptop";


/**
 * @description
 */
const LandingPageLaptopJestTestSuiteO1 = ()=>{
    
    describe("LandingPageLaptop Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <LandingPageLaptop></LandingPageLaptop>
            )

        })

    })

}; LandingPageLaptopJestTestSuiteO1();