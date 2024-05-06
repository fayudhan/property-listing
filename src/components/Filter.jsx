import React, { useState, useEffect } from "react";

const Filter = ({ properties, setFilteredProperties, initialProperties }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [superhostChecked, setSuperhostChecked] = useState(false);
  const [propertyType, setPropertyType] = useState("");

  useEffect(() => {
    // Filter properties based on selected country, superhost status, and property type
    let filtered = initialProperties;

    // Filter by selected country
    if (selectedCountry) {
      filtered = filtered.filter(
        (property) => property.country === selectedCountry
      );
    }

    // Filter by superhost status
    if (superhostChecked) {
      filtered = filtered.filter((property) => property.superhost);
    }

    // Filter by property type
    if (propertyType) {
      filtered = filtered.filter(
        (property) => property.property_type === propertyType
      );
    }

    // Update filtered properties
    setFilteredProperties(filtered);
  }, [selectedCountry, superhostChecked, propertyType, initialProperties]);

  // Handle country filter change
  const handleCountryFilter = (country) => {
    setSelectedCountry(country);
    // Reset superhost filter when country changes
    setSuperhostChecked(false);
    // Reset property type filter when country changes
    setPropertyType("");
  };

  // Handle superhost filter change
  const handleSuperhostFilter = () => {
    setSuperhostChecked(!superhostChecked);
  };

  // Handle property type filter change
  const handlePropertyTypeFilter = (type) => {
    setPropertyType(type);
  };

  return (
    <div className="filter-container p-4 bg-gray-700 bg-opacity-80 border border-gray-600 mt-[-2rem] mb-10 relative rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between md:max-w-[1200px] max-w-md mx-auto">
      {/* Country filter */}
      <div className="mb-4 md:mb-0 md:w-1/4 w-full">
        <select
          className=" text-gray-500 px-4 py-2 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={selectedCountry}
          onChange={(e) => handleCountryFilter(e.target.value)}
        >
          <option value="">All</option>
          {/* Add options for all available countries */}
          {Array.from(
            new Set(properties.map((property) => property.country))
          ).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div className=" md:w-1/3 lg:w-1/4 w-full flex items-center justify-between">
        {/* Superhost filter */}
        <div className="md:mb-0">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-indigo-600"
              checked={superhostChecked}
              onChange={handleSuperhostFilter}
            />
            <span className="ml-2">Superhost</span>
          </label>
        </div>

        {/* Property type filter */}
        <div>
          <select
            className="w-full  px-4 py-2 rounded-lg border-gray-600 text-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={propertyType}
            onChange={(e) => handlePropertyTypeFilter(e.target.value)}
          >
            <option value="">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
            <option value="cottage">Cottage</option>
            <option value="cabin">Cabin</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
