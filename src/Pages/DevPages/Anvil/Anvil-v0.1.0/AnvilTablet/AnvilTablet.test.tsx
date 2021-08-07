
import renderer from "react-test-renderer";
import {
    AnvilTablet
} from "./AnvilTablet";


/**
 * @description
 */
const AnvilTabletJestTestSuiteO1 = ()=>{
    
    describe("AnvilTablet Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <AnvilTablet></AnvilTablet>
            )

        })

    })

}; AnvilTabletJestTestSuiteO1();