import SectionTitle from "./shared/SectionTitle";
import { DESCRIPTION_CONTENT } from "@/lib/data";

export default function Description() {
  return (
    <section id="about" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="container-custom relative z-10">
        <SectionTitle title={DESCRIPTION_CONTENT.title} />

        <div className="max-w-4xl mx-auto space-y-8">
          {DESCRIPTION_CONTENT.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-xl text-gray-600 leading-relaxed text-center font-medium"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
