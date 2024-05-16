import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Component", () => {
    it("should render the contactus component", () =>{
        render(<Contact/>);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    // it and test are one and the samme thing.
    it("should find submit button the contactus component", () =>{
        render(<Contact/>);
        const submitText = screen.getByText("Submit");
        expect(submitText).toBeInTheDocument();
    });
    
    it("should load the input name inside the contactus component", () =>{
        render(<Contact/>);
        const submitText = screen.getByPlaceholderText("Enter your name");
        expect(submitText).toBeInTheDocument();
    });
    
    it("should load the input name inside the contactus component", () =>{
        render(<Contact/>);
        const inputBoxed = screen.getAllByRole("textbox") // screen.getAllByRole('input') this does not exist, it textbox
        // console.log(inputBoxed); // react object HTMLElement will be returned
        expect(inputBoxed.length).toBe(3);
    });
});
