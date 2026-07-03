import React from "react";
import { useNavigate } from "react-router-dom";

import cakes from "../data/cakes.js";
import "../App.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


import logo from "../assets/cake13.png";
import heroImg from "../assets/cake10.png";
import cakeMenu from "../assets/cake8.png";

function Home() {

    const navigate = useNavigate();

    const phone = "9666725858";



    return (
        <>
            <h1 style={{ color: "white", fontSize: "50px" }}></h1>
            <nav className="navbar">

                <div className="logo-box">
                    <img src={logo} alt="SS Cake Factory" className="logo" />

                    <div>
                        <h2>SS Cake Factory</h2>
                        <p>WHOLESALE & RETAIL</p>
                    </div>
                </div>

                <ul className="menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#location">Location</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <a
                    href={`https://wa.me/91${phone}`}
                    target="_blank"
                    rel="noreferrer"
                    className="whatsapp-btn"
                >
                    WhatsApp
                </a>

            </nav>

            <section className="hero-section" id="home">

                <div className="hero-text">

                    <span className="badge">
                        Hyderabad's Premium Cake Studio
                    </span>

                    <h1>
                        Fresh Cakes
                        <br />
                        Crafted With Love
                    </h1>

                    <p>
                        Custom Cakes, Theme Cakes,
                        Birthday Cakes & Cool Cakes
                    </p>

                    <div className="buttons">

                        <a href={`tel:${phone}`} className="call-btn">
                            📞 Call Now
                        </a>

                        <a
                            href={`https://wa.me/91${phone}`}
                            target="_blank"
                            rel="noreferrer"
                            className="wa-btn"
                        >
                            WhatsApp Order
                        </a>

                        <a
                            href="https://www.google.com/maps/place/17%C2%B019'13.8%22N+78%C2%B033'47.9%22E/@17.3204968,78.5625525,18.4z/data=!4m4!3m3!8m2!3d17.3205!4d78.563306"
                            target="_blank"
                            rel="noreferrer"
                            className="location-btn"
                        >
                            📍 Location
                        </a>

                    </div>

                </div>

                <div className="hero-image">
                    <img src={heroImg} alt="SS Cake Factory" />
                </div>

            </section>


            <section className="slider-section">
                <h2>Trending Cakes</h2>

                <Swiper
                    modules={[Autoplay, Navigation]}
                    navigation={true}
                    grabCursor={true}
                    speed={5000}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 }
                    }}
                >

                    {cakes.map((cake) => (
                        <SwiperSlide key={cake.id} onClick={() => window.open(cake.image, "_blank")}>
                            <img
                                src={cake.image}
                                alt={cake.name}
                                style={{
                                    width: "100%",
                                    height: "250px",
                                    objectFit: "cover",
                                    borderRadius: "20px"
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className="menu-section" id="menu">

                <h2>🎂 Cake Price Menu</h2>

                <div className="menu-poster">
                    <img src={cakeMenu} alt="Cake Menu" />
                </div>

            </section>

            <section className="gallery-section" id="gallery">

                <h2>Our Cake Collection</h2>

                <div className="gallery-grid">

                    {cakes.map((cake, index) => (
                        <div
                            className="cake-card"
                            key={index}
                            onClick={() => window.open(cake.image, "_blank")}
                        >

                            <img
                                src={cake.image}
                                alt={cake.name}
                                className="cake-image"
                            />

                            <div className="cake-content">
                                <h3>{cake.name}</h3>

                                <p>Flavor: {cake.flavor}</p>

                                <p>Weight: {cake.weight}</p>

                                <span className="price">{cake.price}</span>

                                <div className="cake-buttons">
                                    <a
                                        href={`https://wa.me/919666725858?text=${encodeURIComponent(
                                            `Hi, I am interested in ${cake.name}
Price: ${cake.price}
Weight: ${cake.weight}
Flavor: ${cake.flavor}`
                                        )}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="wa-btn"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        WhatsApp
                                    </a>

                                    <a
                                        href="https://maps.google.com/?q=17.3205,78.563306"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="location-btn"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Map
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </section>

            <section className="location-section" id="location">

                <h2>📍 Visit Our Store</h2>

                <p>Open our store location in Google Maps.</p>

                <a
                    href="https://www.google.com/maps/place/17%C2%B019'13.8%22N+78%C2%B033'47.9%22E/@17.3204968,78.5625525,18.4z/data=!4m4!3m3!8m2!3d17.3205!4d78.563306"
                    target="_blank"
                    rel="noreferrer"
                    className="location-btn"
                >
                    Open Google Maps
                </a>

            </section>

            <section className="contact-section" id="contact">

                <h2>Contact Us</h2>

                <p>📞 {phone}</p>

                <div className="contact-buttons">

                    <a href={`tel:${phone}`} className="call-btn">
                        Call Now
                    </a>

                    <a
                        href={`https://wa.me/91${phone}`}
                        target="_blank"
                        rel="noreferrer"
                        className="wa-btn"
                    >
                        WhatsApp
                    </a>

                </div>

            </section>

            <footer className="footer">

                <h3>SS Cake Factory</h3>

                <p>Wholesale & Retail Cakes</p>

                <p>📞 {phone}</p>

                <p>© 2026 All Rights Reserved</p>

            </footer>
        </>
    );
}

export default Home;