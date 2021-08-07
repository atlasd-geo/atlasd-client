
import renderer from "react-test-renderer";
import {
    ContributorIntroTablet
} from "./ContributorIntroTablet";


/**
 * @description
 */
const ContributorIntroTabletJestTestSuiteO1 = ()=>{
    
    describe("ContributorIntroTablet Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <ContributorIntroTablet></ContributorIntroTablet>
            )

        })

    })

}; ContributorIntroTabletJestTestSuiteO1();