/* eslint-disable @next/next/no-html-link-for-pages */

export default function Footer() {
  return (
    <footer className=" bg-zinc-600 text-gray-50 font-light">
      <div className="flex flex-col md:flex-row gap-1">
        <div className="p-5 flex flex-col md:flex-row w-full  ">
          <div className=" basis-3/12">
            <p className="font-bold underline">Nos Produits</p>
            <ol className="">
              <li>Easypay</li>
              <li>RollApp</li>
              <li>PayDay</li>
              <li>Digipublic</li>
              <li>..</li>
            </ol>
          </div>
          <div className=" basis-3/12">
            <p className="font-bold underline">Nos address & contacts</p>
            <ol className="">
              <li>
                68, Avenue Batetela, Commune de la Gombe, Kinshasa, R.D. Congo.
              </li>
              <li>+243 81 333 87 77</li>
              <li>+243 999 90 30 30</li>
              <li>info@biosyc.com</li>
              <li>admin@biosyc.com</li>
            </ol>
          </div>
          <div className="  basis-3/12">
            <p className="font-bold underline">Nos services</p>
            <ol className="">
              <li>Management des projets</li>
              <li>Intégration(standarisation des systèmes)</li>
              <li>Turnkey Delivery</li>

              <li>Etc..</li>
            </ol>
          </div>
          <div className=" basis-3/12">
            <p className="font-bold underline">Specialités en solution</p>
            <ol className="">
              <li>Recensement et Identification National</li>
              <li>Production des license de conduction electronic</li>
              <li>Production des passports Biometrics</li>
              <li>Production des visas et Système des visa</li>
              <li>EDMS(Electronic Documents Management System)</li>
              <li>Electronic Archiving System (Eas)</li>
              <li>Smart Justice System(SJS)</li>
              <li>Solution Electronic de Payment (EPS)</li>
              <li>Digital Migration</li>
              <li>Aerial Photo and Mapping</li>
              <li>Energie Renouvelable</li>
            </ol>
            <a href="https://www.biosyc.com/specialised-solutions/">
              <button className="text-sm p-1 border-2 border-teal-200 bg-teal-200 text-teal-900 font-bold rounded hover:bg-teal-800 hover:text-teal-50 hover:border-teal-800">
                Learn More..
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className=" border-t-2 border-gray-100 text-gray-100 w-full p-3">
        &copy; Copyright 2024 Sycamore S.A.R.L All Rights Reserved
      </div>
    </footer>
  );
}
