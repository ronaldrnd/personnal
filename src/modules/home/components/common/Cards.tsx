import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  ctaText?: string;
  ctaOnClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  onClick,
  children,
  footer,
  ctaText,
  ctaOnClick,
}) => {
  return (
    <div
      className="flex  flex-col justify-between rounded-xl overflow-hidden shadow-lg w-[400px] min-h-[500px] hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      {imageUrl && (
        <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      )}

      <div className="px-6 py-4 flex justify-start flex-col items-center">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base w-full whitespace-pre-wrap">
          {description}
        </p>
        {children}
      </div>
      {ctaText && (
        <div className="px-6 pt-4 pb-2 flex justify-center">
          <button
            className="text-gray-100 py-2 px-4 rounded-xl bg-gray-900  transition duration-300 text-xl"
            onClick={(e) => {
              e.stopPropagation(); // Pour éviter de déclencher onClick de la carte
              if (ctaOnClick) ctaOnClick();
            }}
          >
            {ctaText}
          </button>
        </div>
      )}

      {footer && <div className="px-6 pt-4 pb-2">{footer}</div>}
    </div>
  );
};

export default Card;
