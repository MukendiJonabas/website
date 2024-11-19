import Image from "next/image";
import Syc from "../public/executive-smiling-with-laptop.jpg";
export default function Rollap() {
  return (
    <div className="my-24 p-4 text-black">
      <div className="max-w-9xl mx-auto flex flex-col items-center bg-gradient-to-r from-teal-100 to-white px-5 py-24 lg:flex-row">
        <div className="max-w-7xl mx-auto px-5 py-24 flex flex-col md:flex-row gap-5 place-items-center">
          <div className="my-6 flex w-full flex-col basis-4/12 block1">
            <h3 className="mb-3 md:mb-8 text-5xl font-extrabold text-green-900">
              PayDay
            </h3>
            <div className=" text-[1.1rem] font-medium text-green-950 ">
              <p className="font-semibold m-3">
                Bien au-delà d'un simple logiciel de paie, une solution RH
                complète et centralisée.
              </p>
              <p className="font-semibold m-3">
                {" "}
                Conçue pour répondre aux besoins spécifiques des employés, des
                managers et des équipes RH, PayDay favorise l'engagement des
                collaborateurs et l'ecacité opérationnelle. Points clés :{" "}
              </p>
              <ul className="list-disc">
                <li>
                  {" "}
                  Plateforme RH intégrée couvrant les principaux processus
                </li>
                <li> Automatisation et centralisation des fonctions RH</li>
                <li>Fonctionnalités de paie, avantages, performances</li>
                <li>
                  Adaptation aux besoins des différents utilisateurs (employés,
                  managers, RH)
                </li>
                <li>
                  Objectifs d'optimisation de la gestion RH et d'engagement des
                  collaborateurs
                </li>
              </ul>
              <button className="m-2 p-1 border-4 border-gray-400 bg-gray-400 text-black font-bold rounded hover:bg-green-800 hover:text-green-50 hover:border-green-800">
                Learn More..
              </button>
            </div>
          </div>
          <div className="h-auto md:h-auto w-full md:w-full basis-8/12 block2">
            {" "}
            <Image
              src={Syc}
              alt=""
              className="h-full md:h-full w-full md:w-full  border-green-950 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
