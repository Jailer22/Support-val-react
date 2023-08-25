// import { Fragment } from "react";
const Saludo = () =>{
    return(
        <div>Hello user</div>
    )
}

export const HeaderApp = () =>{
    return(
        <>
        <style>
            
        </style>
        <h1>{Saludo()}</h1>
        <header class="header">
      <nav>
        <a href="">Home</a>
        <a href="#about">Services</a>
        <a href="#form">Contact</a>
        <a href="#about">About us</a>
      </nav>
      <div class="container hero">
        <div class="container-text">
          <h1>We Work for you</h1>
          <p clas="copy">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>

      <div class="wave" style="height: 150px; overflow: hidden">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style="height: 100%; width: 100%"
        >
          <path
            d="M-8.18,33.05 C150.00,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style="stroke: none; fill: #fff"
          ></path>
        </svg>
      </div>
    </header>
        </>
        
    );
}