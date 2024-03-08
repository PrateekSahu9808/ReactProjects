import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

//!when we have multiple test cases  we can group multiple testcases into single block by using =>describe()
//* it is alias for test
describe("contact us page test cases",()=>{
    //  beforeAll(()=>{
    //     console.log("it lof the function before all");
        
    //  })
    //  beforeEach(()=>{
    //     console.log("before each will run");
        
    //  })
    //  afterAll(()=>{
    //     console.log("it lof the function after all");
    //  })
    //  afterEach(()=>{
    //     console.log("after each will run");
    //  })
    test("should load contact us components",()=>{
        render(<Contact/>)
       const heading= screen.getByRole("heading");
        expect(heading).toBeInTheDocument()
        
       
        
    })
    test("should load button inside my components",()=>{
        render(<Contact/>)
    //    const button= screen.getByRole("button");
          const button=screen.getByText("Submit")
         expect(button).toBeInTheDocument();
        
    
        
    })
    
    test("should load input name inside my components",()=>{
        render(<Contact/>)
        const inputName= screen.getByPlaceholderText("name")
        expect(inputName).toBeInTheDocument();
    })
    test("should load 2 input boxes on the contact components",()=>{
        render(<Contact/>)
        //Querying
        const inputBoxes=screen.getAllByRole("textbox")
        // inputBoxes.forEach((inputBox) => {
        //     expect(inputBox).toBeInTheDocument();
        //   });
        expect(inputBoxes.length).toBe(2)
        expect(inputBoxes.length).not.toBe(3)
    })
})
