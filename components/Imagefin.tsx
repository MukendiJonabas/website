import Image from "next/image";
import Team from "@/public/Team-building.png";
export default function Imagefin() {
  return (
    <div className="mx-auto">
      <div className="max-w-8xl mx-auto px-5 py-24 lg:px-24">
        <div className="my-6 flex w-full flex-col text-left lg:text-center">
          <h3 className="mb-8 text-5xl font-bold text-black">Jean kazadi</h3>
          <h3 className="mb-12 px-0 text-lg font-semibold text-gray-900 lg:px-52">
            Lorem ipsum accumsan arcu, consectetur adipiscing elit. Aliquet
            vestibulum molestie amet, maecenas id amet. Ipsum accumsan arcu,
            aenean viverra penatibus quis. Laoreet.
          </h3>
        </div>
        <img src="/images/placeholder.png" alt="img" />
      </div>
    </div>
  );
}
