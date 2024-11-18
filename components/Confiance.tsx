export default function Confiance(){
    return(
        <section>
        <div className="mx-auto px-5 pt-32 pb-24 lg:px-24">
          <div className="my-3 flex w-full flex-col text-left lg:text-center">
            <h2 className="bold mb-8 text-4xl font-bold leading-tight text-black lg:text-6xl">
              Lorem ipsum elit sit unar,{" "}
              <br className="hidden lg:inline-block" />
              consectetur adipiscing elit.
            </h2>
          </div>
        <div className="flex w-full flex-col text-left lg:text-center">
        <h3 className="text-2xl text-black">
          Lorem ipsum arcu, consectetur adipiscing elit. Viverra elementum
          pellentesque <br className="hidden lg:inline-block" />
          tortor, luctus blandit sed dolor et, semper. Posuere vitae vitae,
          ac mus. Arcu quis feugiat.
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
      <img src="/images/placeholder.png" alt="img" />
    </div>
    </div>
    </section>
    )
}