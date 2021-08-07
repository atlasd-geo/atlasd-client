import renderer from "react-test-renderer";
import {
    LMonninger
} from "./LMonninger";


/**
 * @description The first test suite written for LMonninger's intro.
 */
const LMonningerJestTestSuiteO1 = ()=>{
    
    describe("LMonninger Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <LMonninger/>
            )

        })

    })

}; LMonningerJestTestSuiteO1();