import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PropertyCard from "../components/PropertyCard";
import { FaArrowUp } from "react-icons/fa";

const HomePage = () => {
  const [showButton, setShowButton] = useState(false);
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [superhostChecked, setSuperhostChecked] = useState(false);
  const [propertyType, setPropertyType] = useState("");
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(9);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProperties(data.listings);
        setFilteredProperties(data.listings);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = properties;

    if (superhostChecked) {
      filtered = filtered.filter((property) => property.superhost);
    }

    if (propertyType) {
      filtered = filtered.filter(
        (property) => property.property_type === propertyType
      );
    }

    setFilteredProperties(filtered);
  }, [properties, superhostChecked, propertyType]);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredProperties.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      <main className="max-w-screen-xl mx-auto bg-gray-800 text-white">
        <Filter
          properties={properties}
          setFilteredProperties={setFilteredProperties}
          initialProperties={properties}
        />
        <div className="md:px-10 px-4 pb-10">
          <h2 className="text-3xl font-semibold mb-8">Over 200 Stays</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentCards.map((property) => (
              <PropertyCard key={`ID-${property.id}`} property={property} />
            ))}
          </div>
          <ul className="flex justify-center mt-4">
            {Array.from(
              { length: Math.ceil(filteredProperties.length / cardsPerPage) },
              (_, i) => (
                <li key={`page-${i}`} className="mr-3">
                  <button
                    onClick={() => paginate(i + 1)}
                    className={`${
                      currentPage === i + 1
                        ? "bg-gray-300 text-gray-700"
                        : "bg-gray-700 text-white"
                    } px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300`}
                  >
                    {i + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
        {showButton && (
          <button
            key="scroll-button"
            onClick={scrollToTop}
            className="bg-white text-gray-800 rounded-full p-3 shadow-lg fixed bottom-5 right-5 transition-all duration-300 hover:bg-gray-200 focus:outline-none"
          >
            <FaArrowUp />
          </button>
        )}
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
