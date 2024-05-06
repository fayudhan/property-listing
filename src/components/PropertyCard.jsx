import React from "react";
import starFillIcon from "../assets/Star_fill.svg";
import houseIcon from "../assets/house-svgrepo-com.svg";
import userIcon from "../assets/user-svgrepo-com.svg";

const PropertyCard = ({ property }) => {
  const {
    id,
    prop_title,
    prop_desc,
    price_per_night,
    rating,
    bedrooms_available,
    guests_capability,
  } = property;

  return (
    <div
      key={id}
      className="rounded-xl overflow-hidden border-gray-300 border-opacity-45 border"
    >
      {/* Content */}
      <div className="relative">
        {property.superhost && (
          <div className="absolute left-2 top-2 flex items-center bg-gray-900 rounded-full text-xs px-3 py-1 text-white">
            <span className="mr-2">Superhost</span>
            <img src={starFillIcon} alt={starFillIcon} className="w-4" />
          </div>
        )}
        <img
          className="w-full h-48 object-cover object-center mb-4"
          src={property.img}
          alt={prop_title}
        />
      </div>
      <div className="px-6 py-4">
        {/* Image thumbnail */}

        {/* Title */}
        <div className="font-bold text-xl mb-2">{prop_title}</div>
        {/* Paragraph */}
        <p className="text-base mb-4 text-gray-400">{prop_desc}</p>

        {/* Icon house - 2 bedroom | Icon user - 3 guests */}
        <div className="flex gap-4">
          <div className="text-sm font-semibold text-gray-400 mr-2 flex items-center gap-2">
            <img src={houseIcon} alt={houseIcon} className="w-5" />
            <span>{bedrooms_available} Bedroom</span>
          </div>
          <div className="text-sm font-semibold text-gray-400 mr-2 flex items-center gap-2">
            <img src={userIcon} alt={userIcon} className="w-5" />
            <span>{guests_capability} Guests</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4">
        {/* Line */}
        <hr className="my-2" />

        {/* Price/night Icon start | rating */}
        <div className="flex items-center justify-between">
          <div className="text-white">
            <span className="text-xl font-bold">${price_per_night}</span>
            <span className="text-gray-400">/night</span>
          </div>
          <div className="flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <img src={starFillIcon} alt={starFillIcon} className="w-5 mr-1" />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
