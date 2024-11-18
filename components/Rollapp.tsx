import Image from "next/image";
import Syc from "../public/satisfaction.png";
export default function Rollap() {
  return (
    <div className="my-24 p-4 text-black">
      <div className="max-w-9xl mx-auto flex flex-col items-center bg-gradient-to-r from-teal-200 to-white px-5 py-24 lg:flex-row">
        <div className="max-w-7xl mx-auto px-5 py-24 flex flex-col md:flex-row gap-5 place-items-center">
          <div className="my-6 flex w-full flex-col basis-4/12">
            <h3 className="mb-8 text-5xl font-medium text-green-900">PayDay</h3>
            <div className=" text-[1.1rem] font-medium text-green-950 ">
              <p>
                Bien au-delà d'un simple logiciel de paie, une solution RH
                complète et centralisée.
              </p>
              <p>
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
                  Adaptation aux besoins des diérents utilisateurs (employés,
                  managers, RH)
                </li>
                <li>
                  Objectifs d'optimisation de la gestion RH et d'engagement des
                  collaborateurs
                </li>
              </ul>
            </div>
          </div>
          <div className="h-auto w-full basis-8/12">
            {" "}
            <Image
              src={Syc}
              alt=""
              className="h-full w-full border-2 border-green-950 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
