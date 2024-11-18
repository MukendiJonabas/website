export default function Partenaires(){
    return(
        <div className="mt-0 bg-white lg:mt-40">
          <div className="mx-auto">
            <div className="mx-auto px-5 py-24 lg:px-24">
              <div className="my-10 flex w-full flex-col text-center">
                <h2 className="mb-5 text-2xl font-bold text-black lg:text-3xl">
                  In ullamcorper magna nunc, non molestie augue feugiat eget.
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
                  <img
                    src="/images/segment.png"
                    alt="Segment"
                    className="block h-24 object-contain"
                  />
                </div>
                <div className="hidden items-center justify-center lg:inline-block">
                  <img
                    src="/images/segment.png"
                    alt="Segment"
                    className="block h-24 object-contain"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="/images/segment.png"
                    alt="Segment"
                    className="block h-24 object-contain"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="/images/segment.png"
                    alt="Segment"
                    className="block h-24 object-contain"
                  />
                </div>
                <div className="hidden items-center justify-center lg:inline-block">
                  <img
                    src="/images/segment.png"
                    alt="Segment"
                    className="block h-24 object-contain"
                  />
                </div>
                <div className="hidden items-center justify-center lg:inline-block">
                  <img
                    src="/images/segment.png"
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
                  Sem enim cursus orci at.
                </h2>
                <p className="mb-4 text-lg leading-relaxed">
                  In ullamcorper magna nunc, non molestie augue feugiat eget.
                  Mauris, vitae et, vitae et cursus amet tincidunt feugiat
                  nulla. Senectus maecenas diam risus sodales dictum eu. Eget
                  cursus sit bibendum pulvinar faucibus vitae nam sed. Faucibus
                  vel laoreet.
                </p>
                <a href="/" className="underline-blue font-semibold">
                  Learn more
                </a>
              </div>
              <img
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
                src="/images/placeholder.png"
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
)
}