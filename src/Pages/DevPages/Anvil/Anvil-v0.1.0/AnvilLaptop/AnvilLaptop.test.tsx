
import renderer from "react-test-renderer";
import {
    AnvilLaptop
} from "./AnvilLaptop";


/**
 * @description
 */
const AnvilLaptopJestTestSuiteO1 = ()=>{
    
    describe("AnvilLaptop Test Suite 01", ()=>{

        test("Renders", ()=>{

            const component = renderer.create(
                <AnvilLaptop></AnvilLaptop>
            )

        })

    })

}; AnvilLaptopJestTestSuiteO1();