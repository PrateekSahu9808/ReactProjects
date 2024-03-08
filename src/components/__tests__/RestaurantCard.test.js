
import {render,screen} from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import DataCard from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"
it("should render Restaurant card with props data",()=>{
    render(<RestaurantCard resData={DataCard}/>)
    
    const name=screen.findByText("Leon's - Burgers & Wings (Leon Grill)")
   
    
    expect(name).toBeInTheDocument();
})