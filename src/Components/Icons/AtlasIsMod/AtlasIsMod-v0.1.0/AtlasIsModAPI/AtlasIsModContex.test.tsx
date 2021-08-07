
import renderer from "react-test-renderer";
import {
    AtlasIsModProvider,
    useAtlasIsModContext
} from "./AtlasIsModContext";


/**
 * @description
 */
const AtlasIsModContextJestTestSuiteO1 = ()=>{
    
    describe("AtlasIsModContext Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <AtlasIsModProvider></AtlasIsModProvider>
            )

        })

    })

}; AtlasIsModContextJestTestSuiteO1();