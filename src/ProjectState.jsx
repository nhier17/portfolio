import React from 'react'
import delicious from "../images/delicious.png"
import delicious2 from "../images/delicious2.png"
import games from "../images/games.png"
import games2 from "../images/games2.png"
import movies from "../images/movies.png"
import movies2 from "../images/movies2.png"
import shoppers from "../images/shoppers.png"
import cart from "../images/cart.png"
import trayls from "../images/trayls.png"
import trayls2 from "../images/trayls2.png"

const ProjectState = () => {
  return[
    {
     title: "Delicious Delicacies",
      mainImg: delicious,
      secondaryImg: delicious2,
      description: "A React application for all food enthusiasts that provides access to a wide range of recipes fetched using the Spoonacular API, with regular updates.",
    url: "/projects/delicious-delicacies"
    },
    {
      title: "Games Tracker",
      mainImg: games,
      secondaryImg: games2
      description: "Games tracker is a free, open-source, mobile app that helps you keep track of your favorite games.",
      url: "/projects/games-tracker"
    },
    {
        title: "Shoppers Paradise",
        mainImg: shoppers,
        secondaryImg: games2,
        description: "Discover a world of endless shopping possibilities with Shoppers Paradise. Our free and open-source mobile app is your ultimate shopping companion, providing a seamless experience to explore and track your favorite products.",
        url: "/projects/shoppers-paradise"
      },
      {
        title: "Netflix Clone",
        mainImg: movies,
        secondaryImg: movies,
        description: "A ReactJS application that grants users access to a curated collection of movies and TV shows fetched from TheMovieDB API. Immerse yourself in a Netflix-like experience with this inspired project.",
        url: "/projects/netflix-clone"
      },
      {
        title: "Happy Trayls",
        mainImg: trayls,
        secondaryImg: trayls,
        description: "Happy trails is a captivating landing web page designed for hiking enthusiasts and nature lovers. Explore our hiking adventures and gain insights into various hiking destinations with a user-friendly interface.",
        url: "/projects/happy-trayls"
      },
      {
        title: "Shopping Cart",
        mainImg: cart,
        secondaryImg: cart,
        description: "A web app that simplifies your shopping experience. Add and manage items in your shopping list effortlessly, providing a seamless checkout process for a stress-free shopping journey.",
        url: "/projects/shopping-cart"
      },
      
  ]
}

export default ProjectState