import React from "react";
import "./pages/AboutMe";
import "./pages/ContactMe";
import "./pages/Portfolio";
import "./pages/Resume";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav>
      <a
        href="#AboutMe"
        onClick={() => handlePageChange("AboutMe")}
        className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
      >
        About
      </a>
      <a
        href="#Portfolio"
        onClick={() => handlePageChange("Portfolio")}
        className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
      >
        Portfolio
      </a>

      <a
        href="#Contact"
        onClick={() => handlePageChange("ContactMe")}
        className={currentPage === "ContactMe" ? "nav-link active" : "nav-link"}
      >
        Contact
      </a>

      <a
        href="#Resume"
        onClick={() => handlePageChange("Resume")}
        className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
      >
        Resume
      </a>
    </nav>
  );
}

export default NavTabs;
