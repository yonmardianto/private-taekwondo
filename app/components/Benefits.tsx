import SectionTitle from "./shared/SectionTitle";
import Card from "./shared/Card";
import { BENEFITS } from "@/lib/constants";

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 px-6 bg-white relative">
      <div className="container-custom">
        <SectionTitle
          title="Manfaat Taekwondo untuk Anak-Anak"
          subtitle="Membentuk karakter, disiplin, dan kesehatan fisik sejak dini"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BENEFITS.map((benefit, index) => (
            <Card key={benefit.id} className="p-10 text-center border border-gray-50 hover:border-primary/10 group transition-all duration-500">
              <div className="mb-8 relative">
                <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center mx-auto group-hover:bg-primary group-hover:rotate-6 transition-all duration-500">
                  {/* Mapping different icons based on ID or index */}
                  <svg
                    className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {benefit.id === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
                    {benefit.id === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />}
                    {benefit.id === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />}
                    {benefit.id === 4 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A3.333 3.333 0 0121 4.817V17.8a3.333 3.333 0 01-3.382 3.334l-11.236-.001A3.333 3.333 0 013 17.801V4.817c0-1.216.666-2.316 1.764-2.833L12 1l7.236 1.016z" />}
                    {benefit.id === 5 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                    {benefit.id === 6 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />}
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
