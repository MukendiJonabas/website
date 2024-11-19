"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import React from "react";
import Icontel from "@/public/tel_icon.png"
import Iconheure from "@/public/heure_icon.png"
import Icondon from "@/public/don_icon.png"
// import Manage from "@/public/management.jpg"
export default function Casescontact() {
  const [visible, setVisible] = useState([false, false, false]); // Un tableau de booleans pour chaque élément

  useEffect(() => {
    // Afficher chaque élément avec un délai
    const timeouts = [
      setTimeout(() => setVisible((prev) => [true, ...prev.slice(1)]), 1000),
      setTimeout(() => setVisible((prev) => [prev[0], true, prev[2]]), 2000),
      setTimeout(() => setVisible((prev) => [...prev.slice(0, 2), true]), 3000),
    ];
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);
  return (
    <section className="w-full max-w-[1200px] mx-auto h-[20%] px-4 gap-6 flex flex-row sm:px-0 sm:py-16 md:flex-col pl-3 pr-3 md:pl-24 md:pr-24 ">
      <section className="flex flex-col md:flex-col pl-3 pr-3 md:pl-3 md:pr-3  place-items-center gap-2  m-2">
        <div
          className={`opacity-0 transform translate-y-5 transition-all duration-1000 ease-out ${
            visible[0] ? "opacity-100 translate-y-0" : ""
          }`}
        ></div>
        <div className="div_titre flex flex-col md:flex-row p-3 md:pl-2 md:pr-2 md:p-1 place-items-center gap-5 m-2 w-full h-auto">
          <div
            className={`opacity-0 transform translate-y-5 transition-all duration-1000 ease-out ${
              visible[0] ? "opacity-100 translate-y-0" : ""
            }`}
          >
            <div className=" bg-white  border-2 xl hover:border-gray-200 p-4 md:p-8 m-5 md:m-8 w-full md:w-auto basis-4/12 hover:shadow-[8px_8px_1px_theme(colors.slate.400)]  rounded-lg">
              <div className="flex flex-row md:flex-row justify-center gap-1 items-center">
                <div className="basis-4/12 md:basis-4/12">
                  <Image
                    src={Icontel}
                    alt="une image ratée"
                    className="h-auto md:h-auto w-auto md:w-auto"
                  />
                </div>
              </div>

              <div>
                <div className="text-[0.8rem] text-teal-900 font-medium m-2">
                  <h1 className="text-center">
                   Téléphone
                  </h1>
                  <p className="text-center">
                  (+243) 81 333 87 77
(+243) 999 90 30 30
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`opacity-0 transform translate-y-5 transition-all duration-1000 ease-out ${
              visible[1] ? "opacity-100 translate-y-0" : ""
            }`}
          >
            <div className=" bg-white  border-2 xl hover:border-white p-4 md:p-8 m-5 md:m-8 w-full md:w-auto basis-4/12 hover:shadow-[8px_8px_1px_theme(colors.slate.400)]  rounded-lg">
              <div className="flex flex-row md:flex-row justify-center gap-1 items-center">
                <div className="basis-4/12 md:basis-4/12">
                  <Image
                    src={Iconheure}
                    alt="une image ratée"
                    className="h-auto md:h-auto w-auto md:w-auto"
                  />
                </div>
              </div>

              <div>
                <div className="text-[0.8rem] text-teal-900 font-medium m-2">
                  <h1 className="text-center">Horaire</h1>
                  <p className="text-center">
                  Du lundi au vendredi de 9h00 à 18h30
                  et le samedi de 9h00 à 13h30
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`opacity-0 transform translate-y-5 transition-all duration-1000 ease-out ${
              visible[2] ? "opacity-100 translate-y-0" : ""
            }`}
          >
            <div className=" bg-white  border-2 xl hover:border-gray-200 p-4 md:p-8 m-5 md:m-8 w-full md:w-auto basis-4/12 hover:shadow-[8px_8px_1px_theme(colors.slate.400)]  rounded-lg">
              <div className="flex flex-row md:flex-row justify-center gap-1 items-center">
                <div className="basis-4/12 md:basis-4/12">
                  <Image
                    src={Icondon}
                    alt="une image ratée"
                    className="h-auto md:h-auto w-auto md:w-auto"
                  />
                </div>
              </div>

              <div>
                <div className="text-[0.8rem] text-teal-900 font-medium m-2">
                  <h1 className="text-center">Soutien</h1>
                  <p className="text-center">
                  info@biosyc.com
                  admin@biosyc.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
