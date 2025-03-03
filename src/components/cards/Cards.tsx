import React from "react";

// Definindo as interfaces para os tipos dos props
interface CardsProps {
  imageSrc: string;
  altText: string;
  dishName: string;
}

const Cards: React.FC<CardsProps> = ({ imageSrc, altText, dishName }) => {
  return (
    <div className="bg-white rounded-lg p-2 min-w-60">
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-32 object-cover rounded-md mb-2"
      />
      <span className="text-bl">{dishName}</span>
    </div>
  );
};

export default Cards;
