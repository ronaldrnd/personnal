interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold w-full text-center">{title ? title : ""}</h1>
    </div>
  );
}
