import Image from "next/image";
import Voda from "@/public/vodacom.jpeg";
import BCC from "@/public/bcc.png";
import Trans from "@/public/Transacademia.png";
import Snel from "@/public/snel.png";
import Equity from "@/public/equity.png";
import ESU from "@/public/images.png";
import Biometrie from "@/public/biometrie.jpg";
export default function Partenaires() {
  return (
    <div className="mt-0 bg-white lg:mt-40">
      <div className="mx-auto">
        <div className="mx-auto px-5 py-24 lg:px-24">
          <div className="my-10 flex w-full flex-col text-center">
            <h2 className="mb-5 text-2xl font-bold text-black lg:text-3xl">
            Un écosystème de partenaires de confiance pour un impact maximal
            </h2>
          </div>
          <div
            className="
                grid grid-cols-2
                gap-16
                text-center
                lg:grid-cols-6"
          >
            <div className="hidden items-center justify-center lg:inline-block">
              <Image
                src={Voda}
                alt="Segment"
                className="block h-24 object-contain"
              />
            </div>
            <div className="hidden items-center justify-center lg:inline-block">
              <Image
                src={BCC}
                alt="Segment"
                className="block h-24 object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={Snel}
                alt="Segment"
                className="block h-24 object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={Trans}
                alt="Segment"
                className="block h-24 object-contain"
              />
            </div>
            <div className="hidden items-center justify-center lg:inline-block">
              <Image
                src={Equity}
                alt="Segment"
                className="block h-24 object-contain"
              />
            </div>
            <div className="hidden items-center justify-center lg:inline-block">
              <Image
                src={ESU}
                alt="Segment"
                className="block h-24 object-contain"
              />
            </div>
          </div>
          <div className="my-12 flex w-full flex-col pl-8 text-center">
            <a
              href="/"
              className="
                  underline-blue
                  mb-8
                  mt-6
                  text-xl
                  font-bold
                  text-black
                "
            >
              Ut eleifend.
            </a>
          </div>
        </div>
      </div>
      <div className="text-black">
        <div
          className="
              max-w-9xl
              mx-auto
              flex
              flex-col
              items-center
              justify-center
              px-5
            "
        >
          <div className="mr-0 mb-6 w-full py-4 text-center lg:w-2/3">
            <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
              Solutions spécialisées
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              Identification nationale, Le permis de conduire, Passeports
              biométriques, Visas et systèmes de visas, Système de gestion
              électronique des documents (SGE), Système d'archivage électronique
              (Eas), Système de justice intelligent (SJS), Solution de paiement
              électronique (EPS), Migration numérique, Photographie et
              cartographie aérienne, Energie renouvelable <br /> <br />
              Découvrez comment nos solutions spécialisées peuvent transformer
              votre organisation.
            </p>
            <a href="https://www.biosyc.com/specialised-solutions/" className="underline-blue font-semibold">
              Learn more
            </a>
          </div>
          <Image
            className="
                lg:w-5/7
                mb-40
                hidden
                w-5/6
                rounded object-cover
                object-center
                lg:inline-block 
                lg:w-4/6
              "
            src={Biometrie}
            alt="img"
          />

          <img
            className="
              mb-24
              inline-block
              w-5/6
              rounded
              object-cover object-center
              lg:hidden
              lg:w-4/6 
            "
            src="/images/placeholder.png"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}
