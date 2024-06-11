import React, { ReactNode } from "react";

interface ProjectCardProps {
  children: ReactNode;
}

interface ImageProps {
  children: ReactNode;
}

interface ContentProps {
  children: ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> & {
  Image: React.FC<ImageProps>;
  Content: React.FC<ContentProps>;
} = ({ children }) => {
  return (
    <div className="relative group w-full h-full overflow-hidden">
      {children}
    </div>
  );
};

const Image: React.FC<ImageProps> = ({ children }) => {
  return (
    <div className="w-full h-full">
      {children}
    </div>
  );
};

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
      {children}
    </div>
  );
};

ProjectCard.Image = Image;
ProjectCard.Content = Content;

export default ProjectCard;
