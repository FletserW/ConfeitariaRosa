// Definindo as interfaces para os tipos dos props
interface CardsNewProps {
  imageSrc: string;
  altText: string;
  dishName: string;
}

const CardsNew: React.FC<CardsNewProps> = ({ imageSrc, altText, dishName }) => {
  return (
    <div className="bg-pink-bg rounded-lg p-2 min-w-20">
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-32 object-cover rounded-md mb-2"
      />
      <span className="text-bl">{dishName}</span>
    </div>
  );
};
export default CardsNew;
