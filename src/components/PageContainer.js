import React, { useState } from "react";
import ContactMe from "./pages/ContactMe";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import NavTabs from "./NavTabs";
import Resume from "./pages/Resume";

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "ContactMe") {
      return <ContactMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
