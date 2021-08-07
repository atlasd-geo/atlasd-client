
import renderer from "react-test-renderer";
import {
    AtlasIsModTablet
} from "./AtlasIsModTablet";


/**
 * @description
 */
const AtlasIsModTabletJestTestSuiteO1 = ()=>{
    
    describe("AtlasIsModTablet Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <AtlasIsModTablet></AtlasIsModTablet>
            )

        })

    })

}; AtlasIsModTabletJestTestSuiteO1();