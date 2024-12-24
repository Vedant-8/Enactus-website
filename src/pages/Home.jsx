import React from "react";

const Home = () => (
  <div>
    <section
      className="hero bg-cover h-screen flex items-center justify-center"
      style={{ backgroundImage: "url(/path-to-background.jpg)" }}
    >
      <h1 className="text-4xl text-white font-bold">What is Enactus?</h1>
    </section>
    <section className="carousel py-16">
      <h2 className="text-3xl text-center mb-8">Our Projects & Events</h2>
      {/* Add a carousel component here */}
    </section>
    <section className="team py-16 bg-gray-100">
      <h2 className="text-3xl text-center mb-8">Meet the Team</h2>
      {/* Add team cards here */}
    </section>
  </div>
);

export default Home;
