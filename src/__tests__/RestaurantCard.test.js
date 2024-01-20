import { render, screen } from "@testing-library/react";
import RestaurantCard, {withVegLabel} from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import LABEL_DATA from "../mocks/resLabelMock.json"

const RestaurantCardVeg = withVegLabel(RestaurantCard);

it("Should render RestaurantCard component with props data", () => {
    render(<RestaurantCard restoData={MOCK_DATA} />);

    const name = screen.getByText("LunchBox - Meals and Thalis");

    expect(name).toBeInTheDocument();
})

/*
it("Should render RestaurantCard component with veg label", () => {
    render(<withVegLabel/>);

    const vegLabel = screen.getByText("Pure Veg");

    expect(vegLabel).toBeInTheDocument();
})
*/