import React from "react";

interface MenuItemProps {
  icon: React.ReactNode;
  positionClass: string;
  detail?: string;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  positionClass,
  onClick,
  detail,
}) => {
  return (
    <div className={`${positionClass} group rounded-xl flex justify-center items-center bg-gray-300`}>
      <button
        className="relative z-10 flex items-center justify-center w-20 h-20 p-5 text-white bg-gray-700 rounded-xl"
        onClick={onClick}
      >
        <div className="flex items-center justify-center w-full">
          {icon}
        </div>
      </button>
      {detail && (
        <div className="relative">
          <p
            className="absolute flex items-center justify-center w-64 h-20 p-2 text-black bg-gray-300 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 -left-16 -top-10"
            onClick={onClick}
          >
            {detail}
          </p>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
