import { fireEvent, render, screen } from "@testing-library/react";
import Main from "../components/Main";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/resListMock.json"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)  
        }
    })
})

it("Should render the main component with Search", async() => {
  await act(async() =>
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });
  // console.log(searchBtn) 

  expect(searchBtn).toBeInTheDocument();
});

/*
it("Should Search Resto-List for pizza text input", async() => {
  await act(async() =>
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    )
  );


  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput =  screen.queryByTestId("searchInput");

  fireEvent.change(searchInput, {target: {value: "Ice Cream"}})

  fireEvent.click(searchBtn);

  const cards = screen.queryAllByTestId("resCard");

  expect(cards.length).toBe(2)
 
});
*/
/*
it("Should filter Top Rated Restaurant", async() => {
  await act(async() =>
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(20);

  const topRatedbtn = screen.getByRole("button", {name:"Top Rated Restaurants"});
  fireEvent.click(topRatedbtn);

  const cardsAfterFilter = screen.queryAllByTestId("resCard");
     
  expect(cardsAfterFilter.length).toBe(13);
});
*/