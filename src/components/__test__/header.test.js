import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { Header } from "../Header";
import { BrowserRouter } from "react-router-dom";

describe ("Header Component", () => {
    it("should render the header component", () => {
        
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );
        const headerElement = document.querySelector(".header")
        expect(headerElement).toBeInTheDocument();
    });
    
    it("should render the login button", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );
        const loginBotton = screen.getByRole("button", {name: "Login"});
        expect(loginBotton).toBeInTheDocument();
    });
    
    it("should the cart items to be zero", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );
        const cart = screen.getByText(/Cart/);
        expect(cart).toBeInTheDocument();
    });
    
    it("should  change login button to logoout on click", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );
        const loginBotton = screen.getByRole("button", {name: "Login"});
        fireEvent.click(loginBotton);
        const logoutBotton = screen.getByText("Logout"); 
        expect(logoutBotton).toBeInTheDocument();
    });
});
