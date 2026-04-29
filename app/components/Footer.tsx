"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { CONTACT_INFO, SOCIAL_MEDIA } from "@/lib/constants";
import { FOOTER_CONTENT } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons: { [key: string]: any } = {
    Instagram: faInstagram,
    Facebook: faFacebook,
    WhatsApp: faWhatsapp,
  };

  return (
    <footer className="bg-gray-900 text-white py-24 px-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-white font-black text-xl">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl leading-none tracking-tight">PRIVATE</span>
                <span className="text-[10px] text-primary font-black tracking-[0.3em] leading-none mt-1 uppercase">Taekwondo</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg font-medium">
              Membangun karakter, disiplin, dan kesehatan fisik melalui seni bela diri Taekwondo berkualitas tinggi untuk putra-putri Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Menu Cepat
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {FOOTER_CONTENT.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Training Locations */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Lokasi Dojang
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                Citra Garden Bintaro
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                Anwa Residence
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                Villa Meruya Jakarta Barat
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Hubungi Kami
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-6">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-400 hover:text-primary transition-colors block font-medium mb-1"
                >
                  {CONTACT_INFO.email}
                </a>
                <span className="text-white font-bold text-xl">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex gap-4 pt-4">
                {SOCIAL_MEDIA.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-primary transition-all duration-500 shadow-xl group"
                    title={social.name}
                  >
                    <FontAwesomeIcon
                      icon={socialIcons[social.name]}
                      className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors"
                    />
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 font-medium text-center md:text-left">
            {FOOTER_CONTENT.copyright.replace("2026", currentYear.toString())}
          </p>

        </div>
      </div>
    </footer>
  );
}
