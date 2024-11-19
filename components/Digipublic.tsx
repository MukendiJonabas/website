import Image from "next/image";
import Lap from "@/public/lap.png";
export default function Digipublic() {
  return (
    <div className="mx-auto flex flex-col items-center max-w-7xl px-5 pt-56 lg:flex-row">
      <div className="mb-16 flex flex-col text-left lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pr-16 lg:pr-6">
        <h2 className="mb-4 text-4xl font-bold leading-none max-w-7xl sm:text-5xl">
          Digipublic
        </h2>
        <p className="font-3xl mb-8 font-bold text-green-500 leading-relaxed">
          DigiPublic, une solution de Sycamore SARL, est un ensemble de
          solutions numériques innovantes concues pour transformer le secteur
          public. 
        </p>
        <p>Nous aidons les administrations à améliorer leur efficacité, leur transparence et leur sécurité grace à des technologies de pointe.{" "} </p>
      </div>
      <div className="lg:w-full lg:max-w-2xl">
        <Image src={Lap} alt="img" />
      </div>
    </div>
  );
}
