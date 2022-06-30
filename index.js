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
// // console.log(element);

// const navbar = (
//     <nav>
//         <h1>React App</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
//     )


// // const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(navbar);


// const root = ReactDOM.createRoot(document.getElementById("root"))

// const elements = (
//     <div>
//     <h1> I am enjoying React</h1>
//     <ul>
//         <ol>It is compossible</ol>
//         <ol>It is declarative</ol>
//         <ol>It is easy and written like html</ol>
//         <ol>It requires time and patience to grasp everything</ol>
//         <ol>It is hireable</ol>
//     </ul>
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(elements);
// // ReactDOM.render(elements, document.getElementById("root"))
// // document.getElementById("root").append(JSON.stringify(elements));



// const app = (
//     <div>
//         <img src="./react-logo.png"/>
//         <h1>Fun fact about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100k stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Power thousand of entreprises app, including mobile apps</li>
//         </ul>
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(app);

// // ReactDOM.render(app, document.getElementById("root"));


/**
Challenge:

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

// PART ONE OF THE CHALLENGE

function Header(){
 return (
   <header>
    <nav>
       <img src="./react-logo.png" width="40px"/>
    </nav>
   </header>
 )
}


function MainContent(){
  return (
  <div>
   <h1>Funny Reasons why I love React!</h1>
   <ol>
     <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
     <li>I'm more likely to get a job as a developer if I know React</li>
   </ol>
  </div>
  )
}

function Footer(){
 return (
  <footer>
   <small> © 2022 Joseph development. All rights reserved.</small>
 </footer>
 )
}

function PartOne(){
    return (
    <div>
     <Header />
     <MainContent />
     <Footer />
    </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PartOne />);