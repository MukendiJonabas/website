import Image from "next/image";
import Banner from "@/public/Banner.jpg"
export default function Confiance(){
    return(
        <section>
        <div className="mx-auto px-5 pt-32 pb-24 lg:px-24">
          <div className="my-3 flex w-full flex-col text-left lg:text-center">
            <h2 className="bold mb-8 text-4xl font-bold leading-tight text-black lg:text-6xl">
            Expertise 360°{" "}
              <br className="hidden lg:inline-block" />
              
            </h2>
          </div>
        <div className="flex w-full flex-col text-left lg:text-center">
        <h3 className="text-2xl text-black">
        Nous simplifions la complexité pour vous aider à innover. <br className="hidden lg:inline-block" />
        De l’audit à l’implémentation, nous sommes à vos côtés à chaque étape. 
        </h3>
      </div>
      <div className="flex w-full flex-row justify-center pt-24 text-center">
        <a
          href="/"
          className="underline-blue px-8 text-xl font-semibold text-black"
        >
          Ut eleifend.
        </a>
        <a
          href="/"
          className="underline-gray px-6 text-xl font-semibold text-gray-700"
        >
          Tempus in.
        </a>
      </div>

    <div className="invisible mx-auto flex max-w-6xl p-3 pb-32 lg:visible lg:px-2">
      <Image src={Banner} alt="img" />
    </div>
    </div>
    </section>
    )
}