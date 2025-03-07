import React, { HTMLAttributes } from "react";

import { Listing } from "../types";

interface ListingProps extends HTMLAttributes<HTMLLIElement> {
  listing: Listing;
}

export const ListingCard = ({ listing }: ListingProps) => {
  const handleAddToFavorites = () => {
    // Task 1
  };

  const handleRemoveFromFavorites = () => {
    // Task 1
  };

  return (
    <li className="relative flex flex-col border rounded">
      <div className="flex flex-col p-4 grow">
        <p>
          <strong>{listing.car}</strong>
        </p>
        <p className="grow">{listing.name}</p>
        <p>
          <a href={`tel:${listing.phone}`}>{listing.phone}</a>
        </p>
        <button
          onClick={handleAddToFavorites}
          className="p-2 text-white bg-blue-700 border rounded"
        >
          Add to favorites 🌟
        </button>
      </div>
    </li>
  );
};
