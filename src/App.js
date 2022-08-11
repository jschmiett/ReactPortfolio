import React, { useState } from "react";
import PagesContainer from "./components/PagesContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
    const [currentPage, setCurrentPage] = useState('AboutMe');
    console.log("Hello World");
    return (
        <>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PagesContainer currentPage={currentPage} />
            <Footer />
        </>
    )
}
