import renderer from "react-test-renderer";
import {
    ContributorIntro
} from "./ContributorIntro";


/**
 * @description
 */
const ContributorIntroJestTestSuiteO1 = ()=>{
    
    describe("ContributorIntro Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <ContributorIntro name="Bezos" 
                    profilePicUrl="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/G5EQG5HPL5IKVEOITHHUNCUIYI.jpg"></ContributorIntro>
            )

        })

    })

}; ContributorIntroJestTestSuiteO1();