
import renderer from "react-test-renderer";
import {
    AtlasIsModMobile
} from "./AtlasIsModMobile";


/**
 * @description
 */
const AtlasIsModMobileJestTestSuiteO1 = ()=>{
    
    describe("AtlasIsModMobile Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <AtlasIsModMobile></AtlasIsModMobile>
            )

        })

    })

}; AtlasIsModMobileJestTestSuiteO1();