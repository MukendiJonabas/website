import Image from "next/image";
import Phone from "@/public/phone-4.png";
export default function Easypay() {
  return (
    <div className="bg-gray-100">
    <div className="m-7 max-w-6xl">
      <div className="mx-auto flex flex-col px-5 py-24 text-left lg:flex-row">
        <div className="hidden lg:inline-block lg:w-full lg:max-w-xl">
          <Image src={Phone} alt="img" />
        </div>
        <div className="flex flex-col pt-0 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-16 lg:pl-24 lg:pt-24">
          <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl">
            Easypay
          </h2>
          <p className="mb-8 font-semibold leading-relaxed  text-green-500">
            EasyPay est un portefeuille numérique qui vous permet d'effectuer
            des transactions de commerce électronique en toute simplicité. Nous
            travaillons avec toutes les institutions bancaires et de paiement
            mobile pour garantir à nos clients une expérience de paiement
            fluide. Consolidez vos besoins financiers et sociaux en un seul
            endroit.
          </p>
        </div>
        <div className="inline-block lg:hidden lg:w-full lg:max-w-xl">
          <Image src="" alt="img" />
        </div>
      </div>
    </div>
    </div>
  );
}
