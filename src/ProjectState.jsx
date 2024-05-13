import { delicious, 
 delicious2,
 games,  
 games2, 
 movies, 
 mt2, 
 shoppers, 
 shoppers3,
 cart,
 music,
 music2,
 rick,
 morty, 
 task, 
 task2, 
 share, 
 share2, 
 post, 
 post2,
 fitness,
 fitness2
 } from "./images";


const ProjectState = [
  {
    title: "Delicious Delicacies",
    mainImg: delicious,
    secondaryImg: delicious2,
    description:
      "A React application for all food enthusiasts that provides access to a wide range of recipes fetched using the Spoonacular API, with regular updates.",
    url: "/projects/delicious-delicacies",
    links: [
      {
        title: "Github",
        url: "https://github.com/nhier17/delicious-delicacies",
      },
      {
        title: "Deployed",
        url: "https://delicious-delicacies-17.netlify.app/",
      },
      {
        title: "Live",
        url: "https://joshua-jordan.github.io/delicious-delicacies/",
      },
    ],
  },
  {
    title: "Games Tracker",
    mainImg: games,
    secondaryImg: games2,
    description:
      "Games tracker is a free, open-source, mobile app that helps you keep track of your favorite games.",
    url: "/projects/games-tracker",
    links: [
      {
        title: "Github",
        url: "https://github.com/nhier17/games-tracker-app",
      },
      {
        title: "Deployed",
        url: "https://games-tracker-17.netlify.app/",
      },
      {
        title: "Live",
        url: "https://github.io/delicious-delicacies/",
      },
    ],
  },
  {
    title: "My Fitness",
    mainImg: fitness,
    secondaryImg: fitness2,
    description: "Welcome to My Fitness, your ultimate companion for achieving your health and fitness goals! Powered by the latest technologies and designed with user experience in mind, My Fitness offers a comprehensive platform to track your workouts, monitor your progress, and stay motivated on your fitness journey. Whether you're a beginner or a seasoned athlete, our app provides personalized workout plans tailored to your fitness level and goals. With intuitive features such as exercise logging, calorie tracking, and progress analytics, you'll have everything you need to optimize your training and transform your body. Join our community today and take the first step towards a healthier, stronger you!",
    url: "/projects/my-fitness",
    links: [
      {
        title: "Github",
        url: "https://github.com/nhier17/my-fitness",
      },
      {
        title: "Deployed",
        url: "https://my-fitness17.netlify.app/",
      },
      {
        title: "Live",
        url: "https://my-fitness17.netlify.app/",
      },
    ],
  },
  {
    title: "Shoppers Paradise",
    mainImg: shoppers,
    secondaryImg: shoppers3,
    description:
      "Discover a world of endless shopping possibilities with Shoppers Paradise. Our free and open-source mobile app is your ultimate shopping companion, providing a seamless experience to explore and track your favorite products.",
    url: "/projects/shoppers-paradise",
    links: [
      {
        title: "Github",
        url: "https://github.com/nhier17/shoppers-paradise",
      },
      {
        title: "Deployed",
        url: "https://shoppers-paradise.netlify.app/",
      },
      {
        title: "Live",
        url: "https://shoppers-paradise.netlify.app/",
      },
    ],
  },
  {
    title: "Netflix Clone",
    mainImg: movies,
    secondaryImg: mt2,
    description:
      "A ReactJS application that grants users access to a curated collection of movies and TV shows fetched from TheMovieDB API. Immerse yourself in a Netflix-like experience with this inspired project.",
    url: "/projects/netflix-clone",
    links: [
      {
        title: "Github",
        url: "https://github.com/nhier17/movie-database",
      },
      {
        title: "Deployed",
        url: "https://movies-streams.netlify.app/",
      },
      {
        title: "Live",
        url: "https://movies-streams.netlify.app/",
      },
    ],
  },
  {
    title: "Music App",
    mainImg: music,
    secondaryImg: music2,
    description:
      "Based on the name its a music player that lets you listen to soothing jazz music while coding.",
    url: "/projects/music-app",
    links: [
      {
        title: "Github",
        url: "https://github.com/nhier17/music-app",
      },
      {
        title: "Deployed",
        url: "https://music-app17.netlify.app/",
      },
      {
        title: "Live",
        url: "https://music-app17.netlify.app/",
      },
    ],
  },
  {
    title: "Shopping Cart",
    mainImg: cart,
    secondaryImg: cart,
    description:
      "A web app that simplifies your shopping experience. Add and manage items in your shopping list effortlessly, providing a seamless checkout process for a stress-free shopping journey.",
    url: "/projects/shopping-cart",
    links: [
      {
        title: "Github",
        url: "https://github.com/nhier17/shopping-cart",
      },
      {
        title: "Deployed",
        url: "https://shopping-cart-17.netlify.app/",
      },
      {
        title: "Live",
        url: "https://shopping-cart-17.netlify.app/",
      },
    ],
  },
  {
    title: "Share Me",
    mainImg: share,
    secondaryImg: share2,
    description:
      "Share Me is a full-stack social media application built using Sanity and React, offering users a platform to share images and engage with other users through comments. With Share Me, users can create posts, upload images, and interact with content from other users through a seamless and intuitive interface. Whether you're sharing your latest adventures, expressing your creativity, or connecting with friends and like-minded individuals, Share Me provides a dynamic and vibrant space for social interaction. Join the community today and start sharing your world with Share Me!",
    url: "/projects/share-me",
    links: [
      {
        title: "Github",
        url: "https://github.com/nhier17/share-me",
      },
      {
        title: "Deployed",
        url: "https://share-me17.netlify.app/",
      },
      {
        title: "Live",
        url: "https://share-me17.netlify.app/",
      },
    ],
  },
  {
    title: "Post It",
    mainImg: post,
    secondaryImg: post2,
    description: "Post It is a dynamic full-stack web application developed using Next.js, Prisma, NextAuth.js, and PostgreSQL. It offers users the ability to create, share, and interact with posts in a collaborative environment. With a sleek and intuitive interface, users can seamlessly navigate through the platform to discover, engage with, and contribute their own content.",
    url: "/projects/post-it",
    links: [
      {
        title: "Github",
        url: "https://github.com/nhier17/post-it",
      },
      {
        title: "Deployed",
        url: "https://post-it17.vercel.app/",
      },
      {
        title: "Live",
        url: "https://post-it17.vercel.app/",
      },
    ],
  },
  {
    title: "Rick & Morty",
    mainImg: rick,
    secondaryImg: morty,
    description:
      "A Next.js App that leverages the Rick & Morty API to provide users with a comprehensive exploration of the locations and characters within the Rick & Morty universe.",
    url: "/projects/rick-morty",
    links: [
      {
        title: "Github",
        url: "https://github.com/nhier17/rick-morty",
      },
      {
        title: "Deployed",
        url: "https://ricky-morty-blond.vercel.app/",
      },
      {
        title: "Live",
        url: "https://ricky-morty-blond.vercel.app/",
      },
    ],
  },
  {
    title: "Task Manager",
    mainImg: task2,
    secondaryImg: task,
    description:
      "Streamline your tasks and boost productivity with this Task Manager application. Stay organized, collaborate seamlessly, and take control of your workflow.",
    url: "/projects/task-manager",
    links: [
      {
        title: "Github",
        url: "https://github.com/nhier17/Task-manager",
      },
      {
        title: "Deployed",
        url: "https://task-manager-87qf.onrender.com",
      },
      {
        title: "Live",
        url: "https://task-manager-87qf.onrender.com",
      },
    ],
  },
];

export default ProjectState;
