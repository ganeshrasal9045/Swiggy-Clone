import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

// Unit Testing
it("Should render Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

//   const loginButton = screen.getByRole("button");

//   const loginButton = screen.getByText("Login");

//  if multiple button is there, find by specifying name
  const loginButton = screen.getByRole("button", {name:"Login"});


  expect(loginButton).toBeInTheDocument();
});

it("Should render Header component with a cart items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    // const cartItems = screen.getByText("Cart-(0 items)");
    // we can also use regex
    const cartItems = screen.getByText(/Cart/);

  
    expect(cartItems).toBeInTheDocument();
});

it("Should change login button to logout button on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginButton = screen.getByRole("button", {name:"Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name:"Logout"});
  
    expect(logoutButton).toBeInTheDocument();
});