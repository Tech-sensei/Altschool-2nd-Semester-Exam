import React from "react";
import home from "../components/images/home.svg";
import { Link } from "react-router-dom";
import "animate.css";
import "./Home.css";

const Home = () => {
  return (
    <main className="animate__animated animate__fadeIn">
      <section className="home section flex">
        <article className="home__container container flex">
          <div className="home__container--contents">
            <h2>Tobiloba Ibraheem</h2>
            <p>
              My fascination with technology doesn't just come from obsession
              with curiosity how computers work. It also comes from the
              curiosity about how everything works, from the tiniest components
              to the most complex systems. I have been a voracious reader,
              always wanting to know more about the latest development in the
              field. I am a warm and friendly person who loves connecting with
              people every chance I get.
            </p>
            <button type="button" className="btn">
              {<Link to="/repos ">Get Repos</Link>}
            </button>
            <button
              type="button"
              className="btn"
              style={{ marginLeft: "2rem" }}
            >
              {<Link to="/error ">Test Error</Link>}
            </button>
          </div>

          <div className="home__container--image">
            <img src={home} alt="Tobiloba Ibraheem" />
          </div>
        </article>
      </section>
    </main>
  );
};

export default Home;
