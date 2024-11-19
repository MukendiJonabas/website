import Image from "next/image";

export default function Rollap() {
  return (
    <div className="my-24 p-4 text-black">
      <div className="max-w-9xl mx-auto flex flex-col items-center bg-gradient-to-r from-blue-200 to-blue-100 px-5 py-24 lg:flex-row">
        <div className="flex flex-col items-center pb-16 pl-0 text-center lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pl-12 lg:pr-24 lg:text-left">
          <h2 className="pb-4 text-2xl font-bold leading-tight lg:text-4xl">
            Lorem ipsum mi at amet, consecteturadipiscing elit. Mattis.
          </h2>
          <p className="text-md mb-8 lg:text-xl">
            Lorem ipsum praesent amet, consectetur adipiscing elit. Cursus
            ullamcorper id tristique tincidunt. Tincidunt feugiat at mi feugiat
            hendrerit. Ac faucibus accumsan, quis lacus, lectus eget bibendum.
            At praesent quisque sollicitudin fusce.
          </p>
        </div>
        <div className="w-4/7 pr-12 lg:w-2/5">
          <Image
            src=""
            className="hidden object-cover object-center lg:inline-block"
            alt="image"
          />
          <Image
            src=""
            className="inline-block object-cover object-center lg:hidden"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}
