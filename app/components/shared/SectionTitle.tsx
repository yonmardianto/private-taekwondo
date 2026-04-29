interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
}
