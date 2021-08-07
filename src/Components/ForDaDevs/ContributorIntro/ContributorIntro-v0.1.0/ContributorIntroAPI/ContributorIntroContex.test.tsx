
import renderer from "react-test-renderer";
import {
    ContributorIntroProvider,
    useContributorIntroContext
} from "./ContributorIntroContext";


/**
 * @description
 */
const ContributorIntroContextJestTestSuiteO1 = ()=>{
    
    describe("ContributorIntroContext Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <ContributorIntroProvider></ContributorIntroProvider>
            )

        })

    })

}; ContributorIntroContextJestTestSuiteO1();