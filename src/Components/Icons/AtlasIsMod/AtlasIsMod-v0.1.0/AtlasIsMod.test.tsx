
import renderer from "react-test-renderer";
import {
    AtlasIsMod
} from "./AtlasIsMod";


/**
 * @description
 */
const AtlasIsModJestTestSuiteO1 = ()=>{
    
    describe("AtlasIsMod Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <AtlasIsMod></AtlasIsMod>
            )

        })

    })

}; AtlasIsModJestTestSuiteO1();