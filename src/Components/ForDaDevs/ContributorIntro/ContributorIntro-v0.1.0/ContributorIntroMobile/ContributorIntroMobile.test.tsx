
import renderer from "react-test-renderer";
import {
    ContributorIntroMobile
} from "./ContributorIntroMobile";


/**
 * @description
 */
const ContributorIntroMobileJestTestSuiteO1 = ()=>{
    
    describe("ContributorIntroMobile Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <ContributorIntroMobile></ContributorIntroMobile>
            )

        })

    })

}; ContributorIntroMobileJestTestSuiteO1();