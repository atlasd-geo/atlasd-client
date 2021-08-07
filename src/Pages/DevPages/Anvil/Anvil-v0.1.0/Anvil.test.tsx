
import renderer from "react-test-renderer";
import {
    Anvil
} from "./Anvil";


/**
 * @description
 */
const AnvilJestTestSuiteO1 = ()=>{
    
    describe("Anvil Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <Anvil></Anvil>
            )

        })

    })

}; AnvilJestTestSuiteO1();