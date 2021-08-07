
import renderer from "react-test-renderer";
import {
    ContributorIntroDesktop
} from "./ContributorIntroDesktop";


/**
 * @description
 */
const ContributorIntroDesktopJestTestSuiteO1 = ()=>{
    
    describe("ContributorIntroDesktop Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <ContributorIntroDesktop name="Bezos" 
                    profilePicUrl="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/G5EQG5HPL5IKVEOITHHUNCUIYI.jpg"></ContributorIntroDesktop>
            )

        })

    })

}; ContributorIntroDesktopJestTestSuiteO1();