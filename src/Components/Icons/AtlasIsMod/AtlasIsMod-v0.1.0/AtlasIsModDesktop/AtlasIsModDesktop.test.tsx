
import renderer from "react-test-renderer";
import {
    AtlasIsModDesktop
} from "./AtlasIsModDesktop";


/**
 * @description
 */
const AtlasIsModDesktopJestTestSuiteO1 = ()=>{
    
    describe("AtlasIsModDesktop Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <AtlasIsModDesktop></AtlasIsModDesktop>
            )

        })

    })

}; AtlasIsModDesktopJestTestSuiteO1();