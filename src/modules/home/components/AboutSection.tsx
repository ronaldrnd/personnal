import AboutSectionPage from "../pages/About/AboutSectionPage";


export default function AboutSection() {
  return (
    <div className="p-2 max-w-[80rem] lg:w-3/4 flex justify-center flex-col gap-10">
         <h3 className="text-4xl font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 text-center">
        More about me
      </h3>
        <AboutSectionPage />
    </div>
  )
}
