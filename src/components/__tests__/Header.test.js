const { render,screen, fireEvent } = require("@testing-library/react")
import {Provider} from 'react-redux'
import Header from "../Header"
import appStore from '../../utils/appStore'
import { BrowserRouter } from 'react-router-dom'
import "@testing-library/jest-dom"

it("should render  header components with a login button",()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore} >
    <Header/>
    
    </Provider>
    </BrowserRouter>

    );
//    const loginButton= screen.getByRole("button")
   const loginButton= screen.getByRole("button",{name:"login"})
//    const loginButton=screen.getByText("login")
    expect(loginButton).toBeInTheDocument()
})

it("Should render Header Components with a Cart items 0 ",()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore} >
    <Header/>
    
    </Provider>
    </BrowserRouter>
    );
    const cartItems=screen.getByText("Cart (0 items)")
    expect(cartItems).toBeInTheDocument();
})
it("Should render Header Components with a Cart items  ",()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore} >
    <Header/>
    
    </Provider>
    </BrowserRouter>
    );
    const cartItems=screen.getByText(/Cart/)
    expect(cartItems).toBeInTheDocument();
})

it("Should change login to logout on click ",()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore} >
    <Header/>
    
    </Provider>
    </BrowserRouter>
    );
    const loginButton=screen.getByRole("button",{name:"login"})
    fireEvent.click(loginButton)
    const logoutButton=screen.getByRole("button",{name:"Logout"})
    expect(logoutButton).toBeInTheDocument();
})