
import renderer from "react-test-renderer";
import {
    AnvilDesktop
} from "./AnvilDesktop";


/**
 * @description
 */
const AnvilDesktopJestTestSuiteO1 = ()=>{
    
    describe("AnvilDesktop Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <AnvilDesktop></AnvilDesktop>
            )

        })

    })

}; AnvilDesktopJestTestSuiteO1();