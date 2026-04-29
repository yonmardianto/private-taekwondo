"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Button from "./shared/Button";
import SectionTitle from "./shared/SectionTitle";
import { CLASS_TYPES, CONTACT_INFO } from "@/lib/constants";
import { CONTACT_CONTENT } from "@/lib/data";
import { generateWhatsAppLink } from "@/lib/whatsapp";

interface FormData {
  name: string;
  phone: string;
  classType: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    classType: "regular",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nama harus diisi";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Nomor HP harus diisi";
    } else if (
      !/^(\+62|62|0)[0-9]{9,12}$/.test(formData.phone.replace(/\D/g, ""))
    ) {
      newErrors.phone = "Nomor HP tidak valid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Get class type label
    const selectedClass = CLASS_TYPES.find(
      (ct) => ct.value === formData.classType,
    );

    // Build message
    const message = `Halo, saya tertarik dengan ${selectedClass?.label || "kelas taekwondo"}.\nNama: ${formData.name}\nNomor: ${formData.phone}`;

    // Generate WhatsApp link
    const whatsappLink = generateWhatsAppLink(
      CONTACT_INFO.whatsappNumber,
      message,
    );

    // Open WhatsApp
    window.open(whatsappLink, "_blank");

    // Reset form
    setFormData({
      name: "",
      phone: "",
      classType: "regular",
    });
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title={CONTACT_CONTENT.title}
          subtitle={CONTACT_CONTENT.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  {CONTACT_CONTENT.formLabels.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${errors.name
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-200 focus:border-primary"
                    } focus:outline-none`}
                  placeholder="Nama lengkap anak"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  {CONTACT_CONTENT.formLabels.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${errors.phone
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-200 focus:border-primary"
                    } focus:outline-none`}
                  placeholder="08123456789"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Class Type */}
              <div>
                <label
                  htmlFor="classType"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  {CONTACT_CONTENT.formLabels.classType}
                </label>
                <select
                  id="classType"
                  name="classType"
                  value={formData.classType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                >
                  {CLASS_TYPES.map((classType) => (
                    <option key={classType.id} value={classType.value}>
                      {classType.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <Button
                onClick={() => { }}
                className="w-full text-center justify-center text-lg py-4"
                type="submit"
              >
                {CONTACT_CONTENT.buttonText}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Atau hubungi kami langsung:
              </h3>

              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-colors border-2 border-green-200"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors border-2 border-blue-200"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">{CONTACT_INFO.email}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add form type validation helper
const submitFormHandler = (form: HTMLFormElement) => {
  const formData = new FormData(form);
  return Object.fromEntries(formData);
};
