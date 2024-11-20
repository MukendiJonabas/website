import Image from "next/image";
import Team from "@/public/Team-building.png";
export default function Imagefin() {
  return (
    <div className="mx-auto">
      <div className="max-w-6xl mx-auto px-5 py-24 lg:px-24">
        <div className="my-6 flex w-full flex-col text-left lg:text-center">
          <h3 className="mb-8 text-5xl font-bold text-black">
            Un collectif uni pour relever vos défis numériques
          </h3>
          <h3 className="mb-12 px-0 text-lg font-semibold text-gray-900 lg:px-52">
            Notre équipe est composée de consultants, développeurs, designers,
            et stratèges dotés d’une riche expérience dans la transformation
            digitale.
          </h3>
        </div>
        <Image src={Team} alt="img" />
      </div>
    </div>
  );
}
