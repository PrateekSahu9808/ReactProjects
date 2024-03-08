// const heading= React.createElement("h1",{id:"heading"},"hello world from react inside it");
// console.log(heading)//object 
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading);  //render convert react element object to html tag


// ! Create nested Element

// ReactElement(Object)=> HTML(Browser understand)
// const parent =React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"i am h1 tag")))


// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent);

// !Sibling element

// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement("div",{id:"child"},
//     [React.createElement("h1",{id:"i am h1"},"i am h1 tag"),React.createElement("h2",{id:"i h2 tag"},"i am h2 tag")]))

// !sibling two element

// const parent = React.createElement(
//     "div",
//     {id:"parent"},[    React.createElement("div",{id:"child"},
//     [React.createElement("h1",{id:"i am h1"},"i am h1 tag")
//     ,React.createElement("h2",{id:"i h2 tag"},"i am h2 tag")]),    React.createElement("div",{id:"child2"},
//     [React.createElement("h1",{id:"i am h1"},"i am h1 tag")
//     ,React.createElement("h2",{id:"i h2 tag"},"i am h2 tag")])]
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent)

