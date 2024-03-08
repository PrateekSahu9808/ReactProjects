const { render,screen, fireEvent } = require("@testing-library/react")
import {act} from "react-dom/test-utils"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
global.fetch= jest.fn(()=>{
     return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
     })
})
it("should render the body component with search button",async()=>{
  await act(async()=>  render(
  <BrowserRouter>
  <Body/></BrowserRouter>))
  const cardsBeforeSearch=screen.getAllByTestId("resCard")

  expect(cardsBeforeSearch.length).toBe(20)
 const searchBtn =screen.getByRole("button",{name:"search"});
 const searchInput=screen.getByTestId('serachInput')
 console.log(searchBtn);
 
 console.log(searchBtn);
 fireEvent.change(searchInput,{target:{value:"burger"}})
 fireEvent.click(searchBtn)
//  expect(searchBtn).toBeInTheDocument();
//!screen should load number of card
const cardsAfterSearch=screen.getAllByTestId('resCard')
expect(cardsAfterSearch.length).toBe(2)

 
})

it("should filter top rated restaurant  ",async()=>{
   await act(async()=>render(
    <BrowserRouter>
    <Body/></BrowserRouter>))
    const cardsBeforeFilter= screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(20);
    const topRatedBtn= screen.getByRole("button",{name:"Top Rated Restaurants"})
    fireEvent.click(topRatedBtn);
    const cardAfterFilter=screen.getAllByTestId("resCard")
    expect(cardAfterFilter.length).toBe(3)
})