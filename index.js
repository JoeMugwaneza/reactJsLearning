// const root = ReactDOM.createRoot(document.getElementById("root"));
// const element = <ul>
//     <li>I am trying to get it done</li>
//     <li>Possibly this is going to work</li>
// </ul>

// root.render(element);

// function MainContent(){
//     return ( 
//         <h1> I'm learning react!</h1>
//     )
// }

// root.render(
//     <MainContent />
// )


// const h1 = document.createElement("h1");
// h1.textContent = "I am practicing Vanilla JS"
// h1.className = "header";
// root.append(h1);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const element = <h1 className="header">This is JSX</h1>;
// root.render(element)
// console.log(element);

const navbar = (
    <nav>
        <h1>React App</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    )


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(navbar);
