import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

// Project timeline data
const data = [
  {
    title: "Bangla Content Management Platform",
    content: (
      <div className="container mx-auto px-2 py-2">
        <div className="mb-4 text-center">
          <div className="flex  gap-4">
            {/* Visit the project button */}
            <a
              href="https://www.banglaglocal.org/"
              className="px-2 py-2 text-base font-semibold text-white border-2 border-purple-600 bg-purple-600 hover:bg-purple-800 transition duration-300 rounded-full shadow-md"
            >
              Visit the Project
            </a>

            {/* View on Github button */}
            <a
              href="https://github.com/SayeedSanjana/bangla_magazine_frontend" // Replace with your actual GitHub repo link
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-2 text-base font-semibold text-purple-600 border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition duration-300 rounded-full shadow-md"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <p className="text-neutral-800 text-base font-normal mb-8">
          I designed and developed a dynamic portfolio website for B.A.N.G.L.A.
          (Bangali Abhibashi Network), a Montreal-based organization, to
          showcase a diverse array of content, including articles, artwork,
          photography, and podcasts. The project involved building a robust
          content management system that efficiently organized and presented
          multimedia content, ensuring a seamless user experience. To guarantee
          scalability and ease of maintenance, I implemented a modular
          architecture that supports dynamic content updates. Additionally, I
          optimized website performance and accessibility by deploying the
          platform to Vercel, which significantly improved user access and
          reduced latency. The website is currently live and being actively
          used, demonstrating my ability to create high-performance platforms
          that prioritize both content delivery and backend organization.
        </p>

        {/* Languages and Technologies Section */}
        <div className="text-center mb-8">
          <div className="flex justify-start gap-4 flex-wrap">
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Vue.js
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Tailwind CSS
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Express.js
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              MongoDB
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              RESTful API
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Vercel
            </span>
          </div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/img1.png"
            alt="hero template"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <img
            src="/img2.png"
            alt="feature template"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <img
            src="/img3.png"
            alt="bento template"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <img
            src="/img4.png"
            alt="cards template"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Context-Aware Intelligent Travel App",
    content: (
      <div className="container mx-auto px-2 py-2">
        <div className="mb-4 text-center">
          <div className="flex gap-4">
            {/* Visit the project button */}
            <a
              href="https://your-project-link.com" // Replace with your actual project link
              className="px-2 py-2 text-base font-semibold text-white border-2 border-purple-600 bg-purple-600 hover:bg-purple-800 transition duration-300 rounded-full shadow-md"
            >
              Visit the Project
            </a>

            {/* View on Github button */}
            <a
              href="https://github.com/your-github-repo" // Replace with your actual GitHub repo link
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-2 text-base font-semibold text-purple-600 border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition duration-300 rounded-full shadow-md"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <p className="text-neutral-800 text-base font-normal mb-8">
          Developed a real-time travel companion app as part of an academic
          project, delivering personalized activity recommendations based on
          user context such as location, time, weather, and personal
          preferences. The app utilized real-time data sources by integrating
          Yelp for activity and restaurant recommendations, OpenWeather for
          weather updates, and Google Maps for location services. A hybrid
          recommendation engine was built using a dataset of 30,000 users,
          resulting in a 90% user satisfaction rate during testing. WebSocket
          technology was employed to send real-time notifications to users,
          ensuring up-to-the-minute changes in activity suggestions and
          enhancing the user experience. The backend was developed with Flask
          and MongoDB, while the frontend was implemented with Vue.js, utilizing
          a RESTful API architecture for seamless communication between the
          client and server.
        </p>

        {/* Languages and Technologies Section */}
        <div className="text-center mb-8">
          <div className="flex justify-start gap-4 flex-wrap">
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Flask
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              MongoDB
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Vue.js
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Tailwind CSS
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              WebSocket
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              RESTful API
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Yelp API
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              OpenWeather API
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Google Maps API
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              JavaScript/ES6
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Python
            </span>
          </div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/img8.png"
            alt="hero template"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <img
            src="/img5.png"
            alt="feature template"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <img
            src="/img6.png"
            alt="bento template"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <img
            src="/img7.png"
            alt="cards template"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Restaurant Recommender System",
    content: (
      <div className="container mx-auto px-2 py-2">
        <div className="mb-4 text-center">
          <div className="flex gap-4">
            {/* Visit the project button */}
            <a
              href="https://your-project-link.com" // Replace with your actual project link
              className="px-2 py-2 text-base font-semibold text-white border-2 border-purple-600 bg-purple-600 hover:bg-purple-800 transition duration-300 rounded-full shadow-md"
            >
              Visit the Project
            </a>

            {/* View on Github button */}
            <a
              href="https://github.com/your-github-repo" // Replace with your actual GitHub repo link
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-2 text-base font-semibold text-purple-600 border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition duration-300 rounded-full shadow-md"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <p className="text-neutral-800 text-base font-normal mb-8">
          For the project I developed, I created a restaurant recommender system
          that offers personalized dining suggestions based on user preferences.
          The system leverages collaborative filtering to enhance the accuracy
          of recommendations, providing a tailored experience for each user. The
          backend was designed to efficiently retrieve data and seamlessly
          integrate the different components, ensuring smooth operation even
          during high demand. The frontend was crafted to offer an intuitive and
          engaging user interface, optimizing the overall user experience.
          During the development process, iterative user testing was conducted,
          refining the system’s accuracy and improving its performance to ensure
          it met user needs effectively. The focus was also placed on fault
          tolerance, ensuring the system maintained high availability during
          peak usage.
        </p>

        {/* Languages and Technologies Section */}
        <div className="text-center mb-8">
          <div className="flex justify-start gap-4 flex-wrap">
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Node.js
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Express.js
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              RESTful API
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              PostgreSQL
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              React
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Tailwind CSS
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Collaborative Filtering
            </span>
          </div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/img9.jpg"
            alt="hero template"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <img
            src="/img10.jpg"
            alt="feature template"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <img
            src="/img11.jpg"
            alt="bento template"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <img
            src="/img12.jpg"
            alt="cards template"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
        </div>
      </div>
    ),
  },

  {
    title: " Distributed Movie Ticket Booking System",
    content: (
      <div className="container mx-auto px-2 py-2">
        <div className="mb-4 text-center">
          <div className="flex gap-4">
            {/* Visit the project button */}
            <a
              href="https://your-project-link.com" // Replace with your actual project link
              className="px-2 py-2 text-base font-semibold text-white border-2 border-purple-600 bg-purple-600 hover:bg-purple-800 transition duration-300 rounded-full shadow-md"
            >
              Visit the Project
            </a>

            {/* View on Github button */}
            <a
              href="https://github.com/your-github-repo" // Replace with your actual GitHub repo link
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-2 text-base font-semibold text-purple-600 border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition duration-300 rounded-full shadow-md"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <p className="text-neutral-800 text-base font-normal mb-8">
          Developed a fault-tolerant, distributed movie ticket booking system in
          Java, ensuring high availability and system reliability. The system
          efficiently handles simultaneous booking requests by implementing
          multithreading and concurrency control, preventing race conditions.
          For seamless inter-service communication, I utilized Java RMI and SOAP
          in the distributed architecture. The system was designed with failover
          mechanisms and fault tolerance strategies, ensuring uninterrupted
          service even during peak traffic periods. I implemented unit tests
          using JUnit to validate the booking logic and concurrency control.
          Extensive functional testing was performed to ensure smooth user
          transactions and a seamless experience.
        </p>

        {/* Languages and Technologies Section */}
        <div className="text-center mb-8">
          <div className="flex justify-start gap-4 flex-wrap">
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Java
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Java RMI
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              SOAP
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Multithreading
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Fault Tolerance
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              JUnit
            </span>
          </div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/img23.png"
            alt="hero template"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <img
            src="/image1.png"
            alt="feature template"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <img
            src="/image2.png"
            alt="bento template"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <img
            src="/image3.png"
            alt="cards template"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
        </div>
      </div>
    ),
  },

  {
    title: "Cloud-based EHR System for Dental Clinics",
    content: (
      <div className="container mx-auto px-2 py-2">
        <div className="mb-4 text-center">
          <div className="flex gap-4">
            {/* Visit the project button */}
            <a
              href="https://www.exampleprojectlink.com"
              className="px-4 py-2 text-base font-semibold text-white border-2 border-purple-600 bg-purple-600 hover:bg-purple-800 transition duration-300 rounded-full shadow-md"
            >
              Visit the Project
            </a>

            {/* View on Github button */}
            <a
              href="https://github.com/your-repository-link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-base font-semibold text-purple-600 border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition duration-300 rounded-full shadow-md"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <p className="text-neutral-800 text-base font-normal mb-8">
          I developed a cloud-based EHR system for dental clinics, designed to
          manage patient data, including medical reports, prescriptions,
          appointments, and treatment histories. The system provides an
          intuitive, user-friendly interface that allows clinicians to
          seamlessly schedule appointments, store prescriptions securely, and
          quickly access medical records. Real-time updates ensure smooth
          workflow, while a centralized dashboard allows efficient management of
          patient data. Additionally, the system includes features like data
          encryption, secure patient record storage, and automated notifications
          to streamline clinic operations and improve efficiency.
        </p>

        {/* Technologies Section */}
        <div className="text-center mb-8">
          <div className="flex justify-start gap-4 flex-wrap">
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Vue.js
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Tailwind CSS
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Node.js
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Express.js
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              MongoDB
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Docker
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Jest(Testing)
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              RESTful API
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              GitHub Actions (CI/CD)
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Digital Ocean
            </span>
          </div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/img17.png"
            alt="hero section"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <img
            src="/img18.png"
            alt="features section"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <img
            src="/img19.png"
            alt="bento grids"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <img
            src="img20.png"
            alt="cards section"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
        </div>
      </div>
    ),
  },

  {
    title: "Trendify - E-commerce Web Application",
    content: (
      <div className="container mx-auto px-2 py-2">
        <div className="mb-4 text-center">
          <div className="flex gap-4">
            {/* Visit the project button */}
            <a
              href="https://www.trendify.com"
              className="px-4 py-2 text-base font-semibold text-white border-2 border-purple-600 bg-purple-600 hover:bg-purple-800 transition duration-300 rounded-full shadow-md"
            >
              Visit the Project
            </a>

            {/* View on Github button */}
            <a
              href="https://github.com/your-repository-link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-base font-semibold text-purple-600 border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition duration-300 rounded-full shadow-md"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <p className="text-neutral-800 text-base font-normal mb-8">
          Trendify is a feature-rich e-commerce platform designed to provide a
          seamless shopping experience. It includes essential features such as
          payment integration, user authentication, admin dashboards, and
          product reviews, all with a clean and responsive UI. Built using
          Next.js, React, and TypeScript, the app supports scalable growth and
          efficient page rendering. Payment processing is handled through Stripe
          and PayPal APIs, and Prisma is used for ORM with a PostgreSQL
          database. The app also includes Jest for unit testing to ensure
          stability.
        </p>

        {/* Technologies Section */}
        <div className="text-center mb-8">
          <div className="flex justify-start gap-4 flex-wrap">
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Next.js
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              React
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              React Hook
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Recharts
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              TypeScript
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Prisma
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              PostgreSQL
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md">
              Stripe & PayPal
            </span>
          </div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/img13.png"
            alt="hero section"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <img
            src="/img14.png"
            alt="features section"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <img
            src="/img15.png"
            alt="bento grids"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <img
            src="/img16.png"
            alt="cards section"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
        </div>
      </div>
    ),
  },
];

const Project = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const wheelY = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const wheelRotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const wheelOpacity = useTransform(scrollYProgress, [0.01, 0.04], [1, 0.6]); // Reduced fade out, opacity will go from 1 to 0.6
  const wheelScale = useTransform(scrollYProgress, [0.01, 0.04], [0.7, 1.2]);

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat font-sans md:px-10 relative "
      style={{
        backgroundImage: 'url("/bg-img.png")', // Replace with your image URL
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gray-400 opacity-30 z-0" />
      <div className="relative max-w-7xl mx-auto py-20 md:py-40  px-4 md:px-8 lg:px-10 z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-900 text-center mb-5">
          Projects
        </h2>
        <p className="text-center">
          Through these projects, I’ve developed and deployed a variety of
          robust web applications, from real-time systems to scalable content
          management platforms, all designed to optimize user experience and
          performance.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-60 md:pb-80 ">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-5 md:gap-10 pb-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-purple-600 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-purple-400 border-neutral-300 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl lg:text-5xl font-bold text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: height,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-400 via-purple-600 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>

      {/* Rotating SVG at the end of the Project section */}
      <motion.div
        style={{
          y: wheelY,
          rotate: wheelRotate,
          opacity: wheelOpacity,
          scale: wheelScale,
        }}
        className="absolute bottom-[80px] left-1/2 w-[250px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[400px] md:h-[550px] -translate-x-1/2 translate-y-0 z-0 pointer-events-none bg-transparent"
      >
        <img
          src="/wheel2.svg"
          alt="Wheel"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Project;
