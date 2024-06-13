

export default function AboutSectionLeft({image}: {image: string}) {
  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-96 rounded-xl">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </>
  )
}
