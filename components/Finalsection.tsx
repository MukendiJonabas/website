import Image from "next/image";
import United from "@/public/Unite.jpg";
export default function Finalsection() {
  return (
    <div className="text-black">
      <div className="max-w-6xl mx-auto flex flex-col px-5 py-5 text-black lg:flex-row">
        <div className="lg:mb-0 lg:w-full lg:max-w-xl">
          <Image
            className="rounded object-cover object-center"
            alt="image"
            src={United}
          />
        </div>
        <div className="items-left flex flex-col pt-16 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-32  lg:text-left">
          <h2 className="mb-2 text-lg leading-tight text-gray-700 sm:text-lg">
            Avez-vous des questions ou souhaitez-vous en savoir plus sur nos
            services ? N'hésitez pas à nous contacter, nous serons ravis de vous
            répondre
          </h2>
          <h2 className="mb-6 text-lg font-bold sm:text-lg">Contactez-nous</h2>
          <h2 className="mb-4 text-3xl font-bold sm:text-3xl">
            Prenez contact avec nos experts et concrétisez vos ambitions
            digitales
          </h2>
          <a
            href="/"
            className="underline-blue mt-12 text-lg font-bold leading-relaxed"
          >
            Ut convallis massa.
          </a>
        </div>
      </div>
    </div>
  );
}
