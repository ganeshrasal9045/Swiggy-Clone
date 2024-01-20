import { render, screen } from "@testing-library/react";
import Contact from "../pages/Contact";
import "@testing-library/jest-dom";

// Unit Testing
describe("Contact Us Page Test Case", () => {
    // test or it - one in the same thing
    test("Should load contact us component", () => {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        // Assertion
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load buuton inside contact component", () => {
        render(<Contact />);
    
        // const button = screen.getByRole("button");
        const button = screen.getByText("Send Message");
    
        // Assertion
        expect(button).toBeInTheDocument();
    });
    
    test("Should load input name inside contact component", () => {
        render(<Contact />);
    
        const inputName = screen.getByPlaceholderText("name");
    
        // Assertion
        expect(inputName).toBeInTheDocument();
    });
    
    test("Should load 3 input boxes on the contact component", () => {
        render(<Contact />);
    
        // Querying
        const inputBoxes = screen.getAllByRole("textbox");
    
        // console.log(inputBoxes.length);
    
        // Assertion
        expect(inputBoxes.length).toBe(3);
    });
});
