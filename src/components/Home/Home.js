import React from 'react';
import './Home.css';
import img from "./img1.webp"
import img1 from './gif.gif'
import fb from './facebook.svg'
import insta from './insta.svg'
import twitter from './twitter.svg'

const Home = () => {
    const toggleTheme = (e) => {
        const theme = e.target.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
    };

    return (
        <div className="home">
            <header>
                <img src={img} className='header-image' />
                <h1>Welcome to Pizza Mania</h1>
                <p>Your ultimate destination for delicious pizzas.</p>
            </header>
            <section className="intro">
                <h2>What is Pizza Mania?</h2>
                <p>Pizza Mania is your go-to place for a wide variety of mouth-watering pizzas made with fresh ingredients.</p>
            </section>
            <section className="features">
                <h2>Our Specialties</h2>
                <ul>
                    <li>Authentic Italian pizzas</li>
                    <li>Fresh and high-quality ingredients</li>
                    <li>Customizable toppings and crusts</li>
                </ul>
            </section>
            <section className="audience">
                <h2>Who Will Love Our Pizzas?</h2>
                <p>Pizza Mania is perfect for anyone who loves great-tasting pizzas, from families to food enthusiasts.</p>
            </section>
            <section className="benefits">
                <h2>Why Choose Pizza Mania?</h2>
                <ul>
                    <li>Unique and flavorful recipes</li>
                    <li>Convenient online ordering and fast delivery</li>
                    <li>Friendly and welcoming atmosphere</li>
                    <li>Great value for money</li>
                </ul>
            </section>
            <section className="call-to-action">
                <h2>Order Your Pizza Today</h2>
                <p>Explore our menu and place your order now for a delightful pizza experience.</p>
            </section>
            <div className='gifback'>
                <img src={img1} className='gif' />
            </div>

            <div className='follow'>
                <h4>Follow Us On</h4>
                <div className='logo'>
                    <a href='https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F'><img src={fb} /></a>
                    <a href='https://www.instagram.com/' ><img src={insta} /></a>
                    <a href='https://x.com/' ><img src={twitter} /></a>
                </div>
            </div>
        </div>
    );
}

export default Home;

