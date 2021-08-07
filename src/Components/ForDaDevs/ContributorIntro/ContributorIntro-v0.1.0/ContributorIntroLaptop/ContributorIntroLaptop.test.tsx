
import renderer from "react-test-renderer";
import {
    ContributorIntroLaptop
} from "./ContributorIntroLaptop";


/**
 * @description
 */
const ContributorIntroLaptopJestTestSuiteO1 = ()=>{
    
    describe("ContributorIntroLaptop Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <ContributorIntroLaptop></ContributorIntroLaptop>
            )

        })

    })

}; ContributorIntroLaptopJestTestSuiteO1();