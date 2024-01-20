import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../components/RestaurantMenu"
import { act } from "react-dom/test-utils";
import MOCK_DATA_CART from "../mocks/resCartMock.json"

global.fetch = jest.fn(()=>
    Promise.resolve({
        json:()=> Promise.resolve(MOCK_DATA_CART)
    })
)
it("Should load Restaurant Menu component", async()=> {
    await act(async() => render(<RestaurantMenu />));

    const accordionHeader = screen.getByText("Burgers & Wraps (20)");
    
})