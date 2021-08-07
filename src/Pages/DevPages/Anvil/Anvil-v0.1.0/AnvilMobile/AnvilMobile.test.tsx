
import renderer from "react-test-renderer";
import {
    AnvilMobile
} from "./AnvilMobile";


/**
 * @description
 */
const AnvilMobileJestTestSuiteO1 = ()=>{
    
    describe("AnvilMobile Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <AnvilMobile></AnvilMobile>
            )

        })

    })

}; AnvilMobileJestTestSuiteO1();