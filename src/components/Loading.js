import React from "react";
import Spinner from "../components/images/spinner.svg";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading flex">
      <img src={Spinner} alt="" className="spinner" />
    </div>
    // <main className="animate__animated animate__fadeIn">
    //   <section className="repos flex">
    //     <div className="section__header">
    //       <h3>Repositories</h3>
    //       <div className="underline"></div>
    //     </div>
    //     <article className="repos__container container">
    //       <div className="repos__container--contents flex">
    //         <img src={Laptop} alt="repository" className="repos__image" />
    //         <h4 className="repos__title">AltSchool Router-react</h4>
    //         <p className="repos__desc">
    //           You can add webfonts, meta tags, or analytics to this file. The
    //           build step will place the bundled scripts into the
    //         </p>
    //         <button type="button" className="repo-btn">
    //           {/* <Link to={`/repos/${uuid}`}>View Profile</Link> */}
    //           check repo
    //         </button>
    //       </div>
    //       <div className="repos__container--contents"></div>
    //       <div className="repos__container--contents"></div>
    //       <div className="repos__container--contents"></div>
    //       <div className="repos__container--contents"></div>
    //       <div className="repos__container--contents"></div>
    //     </article>
    //   </section>
    // </main>
  );
};

export default Loading;
