import React from "react";
import Card from "../../components/common/Cards";
interface ServicesCardProps {
  title: string;
  description: string;
  ctaText: string;
  imageUrl: string;
  ctaOnClick: () => void;
  children?: React.ReactNode;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  title,
  description,
  ctaText,
  imageUrl,
  ctaOnClick,
  children
}) => {
  return (
    <>
      <div className="h-full z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-20">
        <Card
          title={title}
          description={description}
          ctaText={ctaText}
          imageUrl={imageUrl}
          ctaOnClick={ctaOnClick}
        >
          {children}
        </Card>
      </div>
    </>
  );
};

export default ServicesCard;
