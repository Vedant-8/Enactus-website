import projectsData from "../assets/data/projectsData.json";
import React from "react";
import { Carousel, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-dark text-white min-vh-100">
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

      {/* Wrapper div with gradient background */}
      <div className="bg-gradient-to-b from-dark to-white py-12">
        {/* Carousel Section */}
        <section className="my-12">
          <h2 className="text-center text-3xl font-bold mb-6">
            Our Projects & Events
          </h2>
          <div style={{ position: "relative", padding: "0 10%" }}>
            <Carousel
              indicators={false}
              controls={true}
              interval={3000}
              style={{ overflow: "visible" }}
            >
              {projectsData.projects.map((project, index) => (
                <Carousel.Item key={index}>
                  <div
                    style={{
                      width: "600px",
                      height: "400px",
                      margin: "0 auto",
                      overflow: "hidden",
                      position: "relative",
                      transform: "scale(0.9)",
                      transition: "transform 0.3s ease",
                    }}
                    className="carousel-card"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(0.9)";
                    }}
                  >
                    <Card
                      className="bg-dark text-white d-flex flex-column justify-content-between align-items-center"
                      style={{
                        width: "100%",
                        height: "100%",
                        boxShadow: "0px 8px 15px rgba(0,0,0,0.3)",
                        borderRadius: "12px",
                        padding: "20px",
                      }}
                    >
                      <Card.Body
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          height: "100%",
                        }}
                      >
                        <h3
                          className="text-2xl font-bold"
                          style={{
                            position: "absolute",
                            top: "10%",
                            transform: "translateY(-50%)",
                          }}
                        >
                          {project.name}
                        </h3>
                        <p
                          style={{
                            marginTop: "auto",
                            marginBottom: "auto",
                          }}
                        >
                          {project.overview}
                        </p>
                      </Card.Body>
                    </Card>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </section>

        {/* Team Button Section */}
        <section className="my-12 text-center">
          <button
            onClick={() => (window.location.href = "/team")} // This will redirect to the team page
            className="inline-block px-8 py-4 text-lg font-bold text-black bg-yellow-500 rounded-lg transition-transform duration-300 ease-in-out hover:bg-yellow-600 hover:scale-105"
            style={{
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            View Team Members
          </button>
        </section>
      </div>
    </div>
  );
};

export default Home;
