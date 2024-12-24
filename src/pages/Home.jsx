import React from "react";
import { Carousel, Card } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-dark text-white h-screen flex items-center justify-center">
        <div className="text-center max-w-lg mx-auto">
          <h1 className="text-4xl font-bold mb-4">What is Enactus?</h1>
          <p className="text-xl">
            Enactus is a global nonprofit organization that brings together
            students, academics, and business leaders to use entrepreneurial
            action to transform lives and shape a better, more sustainable
            world.
          </p>
        </div>
      </section>

      {/* Carousel Section using react-bootstrap */}
      <section className="my-12">
        <h2 className="text-center text-3xl font-bold mb-6">
          Our Projects & Events
        </h2>
        <Carousel>
          {/* Slide 1 */}
          <Carousel.Item>
            <Card className="h-64 bg-dark text-white">
              <Card.Body className="text-center">
                <h3 className="text-2xl font-bold">Project 1</h3>
                <p>Objective of Project 1</p>
              </Card.Body>
            </Card>
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item>
            <Card className="h-64 bg-dark text-white">
              <Card.Body className="text-center">
                <h3 className="text-2xl font-bold">Project 2</h3>
                <p>Objective of Project 2</p>
              </Card.Body>
            </Card>
          </Carousel.Item>

          {/* Slide 3 */}
          <Carousel.Item>
            <Card className="h-64 bg-dark text-white">
              <Card.Body className="text-center">
                <h3 className="text-2xl font-bold">Project 3</h3>
                <p>Objective of Project 3</p>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Team Section */}
      <section className="my-12 px-4">
        <h2 className="text-center text-3xl font-bold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Dummy Team Member Cards */}
          <Card className="team-card rounded-lg shadow-lg p-4 bg-dark text-white">
            <div className="h-32 bg-gray-500 mb-4"></div>
            <Card.Body className="text-center">
              <h3 className="font-semibold text-xl text-white">John Doe</h3>
              <p className="text-center text-gray-300">President</p>
            </Card.Body>
          </Card>
          <Card className="team-card rounded-lg shadow-lg p-4 bg-dark text-white">
            <div className="h-32 bg-gray-500 mb-4"></div>
            <Card.Body className="text-center">
              <h3 className="font-semibold text-xl text-white">Jane Smith</h3>
              <p className="text-center text-gray-300">Vice President</p>
            </Card.Body>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
