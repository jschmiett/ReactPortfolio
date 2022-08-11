
import React from 'react';
import Portfolio from './pages/Portfolio';
import ContactMe from "./pages/ContactMe";
import AboutMe from "./pages/AboutMe";

export default function PagesContainer({ currentPage }) {

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'ContactMe') {
      return <ContactMe />;
    }
    return <AboutMe />;
  };



  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
