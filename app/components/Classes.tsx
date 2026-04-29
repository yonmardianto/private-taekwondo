"use client";

import Button from "./shared/Button";
import Card from "./shared/Card";
import SectionTitle from "./shared/SectionTitle";
import { TRAINING_LOCATIONS } from "@/lib/constants";
import { CLASSES_CONTENT } from "@/lib/data";

export default function Classes() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="classes" className="py-24 px-6 bg-gray-50/50">
      <div className="container-custom">
        <SectionTitle 
          title={CLASSES_CONTENT.title} 
          subtitle="Pilih program yang paling sesuai dengan kebutuhan putra-putri Anda"
        />

        {/* Regular Classes */}
        <div className="mb-32">
          <div className="flex flex-col items-center mb-16">
            <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider mb-4">
              Dojang Terdekat
            </span>
            <h3 className="text-4xl font-black text-gray-900 text-center">
              {CLASSES_CONTENT.regularTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {TRAINING_LOCATIONS.map((location) => (
              <Card key={location.id} className="p-10 border border-white hover:border-primary/20 bg-white">
                <div className="mb-8 flex justify-center">
                  <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {location.name}
                </h4>
                <p className="text-gray-500 text-center mb-8 min-h-[3rem]">
                  {location.address}
                </p>
                <div className="bg-gray-50 rounded-xl p-5 mb-8 text-center border border-gray-100">
                  <p className="text-sm font-semibold text-gray-700">
                    Kapasitas Terbatas
                  </p>
                  <p className="text-2xl font-black text-primary">
                    {location.maxStudents} <span className="text-sm font-medium text-gray-500">Peserta</span>
                  </p>
                </div>
                <Button
                  onClick={scrollToContact}
                  className="w-full py-4 shadow-lg hover:shadow-primary/20"
                >
                  Daftar Sekarang
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Private Classes Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary/5 -skew-y-3 rounded-[3rem] -z-10" />
          
          <div className="py-20 px-8 md:px-16">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="px-4 py-1.5 bg-white text-primary rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">
                    Eksklusif & Personal
                  </span>
                  <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                    {CLASSES_CONTENT.privateTitle}
                  </h3>
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                    {CLASSES_CONTENT.privateDescription}
                  </p>
                  <Button onClick={scrollToContact} className="text-lg px-10 py-5 rounded-full">
                    Konsultasi Private
                  </Button>
                </div>

                <div className="bg-white p-10 rounded-[2rem] shadow-2xl border border-primary/10">
                  <h4 className="text-2xl font-bold text-gray-900 mb-8">
                    Mengapa Private?
                  </h4>
                  <ul className="space-y-6">
                    {CLASSES_CONTENT.privateFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-lg text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
