interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div>
      <h1 className="text-5xl font-bold">{title ? title : ""}</h1>
    </div>
  );
}
