import ServicesCard from "./ServicesCard";
import webImage from "../../../../assets/images/Retrace-Web-Services-881x441-1.jpg";
import mobileImage from "../../../../assets/images/the_complete_guide_to_mobile_app_development_2021_ded2abd1b1.png";
import desktopImage from "../../../../assets/images/desktop-application-development.jpg";

export default function ServicesSectionPage() {
  const ctaHandleClick = () => {
    console.log("details");
  };

  return (
    <div className="">
      <div className={"flex w-full flex-col gap-10 lg:flex-row"}>
        <div className="h-full flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden shadow-2xl">
          <ServicesCard
            imageUrl={desktopImage}
            title="Creating desktop application"
            description="Develop robust and efficient desktop applications tailored to meet your business needs. Our solutions ensure seamless performance and user-friendly interfaces for an optimal experience."
            ctaText="details"
            ctaOnClick={ctaHandleClick}
          >
            <a href="" className="whitespace-pre-wrap text-base text-blue-700 underline">see all my personnal desktop applications projects</a>
          </ServicesCard>
        </div>
        <div className="h-full flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden shadow-2xl">
          <ServicesCard
            imageUrl={webImage}
            title="Creating web application"
            description="Design and develop dynamic web applications that are responsive, secure, and scalable. Our expertise guarantees an engaging user experience with cutting-edge technologies."
            ctaText="details"
            ctaOnClick={ctaHandleClick}
            >
              <a href="" className="whitespace-pre-wrap text-base text-blue-700 underline">see all my web applications projects</a>
            </ServicesCard>
        </div>
        <div className="h-full flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden shadow-2xl">
          <ServicesCard
            imageUrl={mobileImage}
            title="Creating mobile application"
            description="Craft high-quality mobile applications for both Android and iOS platforms. We focus on delivering intuitive and feature-rich apps that cater to your specific requirements."
            ctaText="details"
            ctaOnClick={ctaHandleClick}
            >
              <a href="" className="whitespace-pre-wrap text-base text-blue-700 underline">see all my mobile applications projects</a>
            </ServicesCard>
        </div>
      </div>
    </div>
  );
}
