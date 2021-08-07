
import renderer from "react-test-renderer";
import {
    AnvilProvider,
    useAnvilContext
} from "./AnvilContext";


/**
 * @description
 */
const AnvilContextJestTestSuiteO1 = ()=>{
    
    describe("AnvilContext Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <AnvilProvider></AnvilProvider>
            )

        })

    })

}; AnvilContextJestTestSuiteO1();