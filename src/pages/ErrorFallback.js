import React from "react";
import error from "../components/images/error500.png";
import "./Error.css";
import "animate.css";
const ErrorFallback = () => {
  return (
    <main className="animate__animated animate__bounceIn">
      <section className="error__section">
        <article className="error__container container">
          <div className="errorfall-text">
            <h2>Something went wrong</h2>
            <p>
              NOTE:: I intensionally threw an error to test the error ErrorBoundary page. The ErrorBoundary components has been wrapped around the App component.
            </p>
          </div>
          <figure className="error__container--image">
            <img src={error} alt="hero" className="error-image" />
          </figure>
        </article>
      </section>
    </main>
  );
};

export default ErrorFallback;
