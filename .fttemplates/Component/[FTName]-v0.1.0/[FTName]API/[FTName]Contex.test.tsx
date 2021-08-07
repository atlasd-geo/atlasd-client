
import renderer from "react-test-renderer";
import {
    <FTName>Provider,
    use<FTName>Context
} from "./[FTName]Context";


/**
 * @description
 */
const <FTName>ContextJestTestSuiteO1 = ()=>{
    
    describe("[FTName]Context Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <<FTName>Provider></<FTName>Provider>
            )

        })

    })

}; <FTName>ContextJestTestSuiteO1();