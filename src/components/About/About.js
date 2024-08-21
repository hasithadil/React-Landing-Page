import React from "react";
import './About.css';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './typesofpizza.jpg'
import image4 from './pizza.jpg'

function About() {
  return (
    <div className="container">
      <section className="pizzas">
        <img src={image4} className="pizzaimage" />
      </section>
      <h1>About Pizza Mania</h1>

      <section className="intro">
        <p>
          Welcome to Pizza Mania, your ultimate destination for the best pizzas in town.
          Whether you're a pizza enthusiast or just looking for a great meal, Pizza Mania is here to deliver an unforgettable experience.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At Pizza Mania, our mission is to bring joy to your taste buds with our delicious pizzas.
          We believe in using fresh ingredients and traditional recipes to create pizzas that are both tasty and memorable.
          Our commitment is to provide an exceptional dining experience for all our customers.
        </p>
      </section>

      <section className="offerings">
        <h2>What We Offer</h2>

        <div className="offering">
          <img src={image3} className="typesofpizza" />
          <p>
            Explore our diverse menu featuring a wide range of pizzas, from classic Margherita to gourmet options with unique toppings.
            Our menu is designed to cater to all tastes and preferences.
          </p>
        </div>

        <div className="offering">
          <h3>Fresh Ingredients</h3>
          <p>
            We take pride in using only the freshest ingredients in our pizzas. From hand-tossed dough to our special sauce and premium toppings,
            every pizza is made to perfection.
          </p>
        </div>

        <div className="offering">
          <h3>Exceptional Service</h3>
          <p>
            Our team is dedicated to providing you with the best service possible. Whether you're dining in, taking out, or ordering delivery,
            we ensure a delightful experience every time.
          </p>
        </div>

        <div className="Team">
          <h3>Our Team</h3>
        </div>
        <div className="image">  
          <img src={image1} alt="pic 1 missing" />
          <img src={image2} alt="pic 2 missing" />
        </div>
      </section>
    </div>
  );
}

export default About;
