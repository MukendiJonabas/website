import Image from "next/image";
import tech from "../public/syca.png";
export default function HeroSection() {
  return (
    <section className="w-full">
      <div className="mx-auto flex flex-col md:flex-row  items-center p-3 pt-0 gap-3">
        <div className="basis-3/6">
          <h2 className="block2 max-w-xl lg:text-[4.4rem] text-3xl font-bold leading-none text-green-700 inline-block  ml-3 mr-3 md:ml-36 md:mr-3">
            SYCAMORE sarl
          </h2>

          <div className="Maclasse place-items-start text-green-800 flex flex-col md:flex-col text-[1.2rem]  gap-3 ml-3 mr-3 md:ml-36 md:mr-36 font-semibold">
            <p className="block1 p-1 text-start">
              SYCAMORE est l'un des principaux fournisseurs de solutions
              informatiques et innovation en République Démocratique du Congo
            </p>
            <p className="block2  p-1 text-start">
              Sycamore est composé de professionnels expérimentés qui s'engagent
              à fournir des services de classe mondiale aux clients du secteur
              public, aux entreprises du secteur privé et aux partenaires en RD
              Congo.
            </p>
            <button className="p-1 border-4 border-green-800 bg-green-200 text-green-900 font-bold rounded hover:bg-green-800 hover:text-green-50">
              Learn More..
            </button>
          </div>
        </div>
        <div className="h-auto w-full p-2 basis-3/6">
          <Image
            src={tech}
            alt="Hero"
            className="block1 w-full h-auto bg-green-50 p-2"
          />
        </div>
      </div>
    </section>
  );
}
