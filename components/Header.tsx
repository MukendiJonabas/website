import Image from "next/image";
import Link from "next/link";
import Logosyc from "@/public/ID-Sycamore-13.png"
export default function Header() {
    return (
      <>
       
        
        <div className=" flex items-center sticky z-20 top-0 bg-lime-700 justify-between py-4 px-4 sm:mx-0 sm:mb-20 sm:px-0 md:px-6">
          <div className="mt-4 pb-4 flex flex-row ">
          <Link href={"/"}>
        <Image src={Logosyc} alt="" width={150} />
      </Link>
            <div className=" flex pl-14 align-middle xl:inline-block">
              <Link href="/" className="pr-12 text-xl text-white font-bold">
                Home
              </Link>
              <Link href="/" className="pr-12 text-xl text-white font-bold">
                Services
              </Link>
              
              <Link href="/" className="text-xl text-white font-bold">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden py-1 text-right xl:inline-block">
              <a
                className="mt-2 inline-flex items-center border-1 border-solid rounded-lg bg-[#048996] text-white px-12 py-3 text-lg font-semibold tracking-tighter"
                href="/"
              >
                Log in
              </a>
             
            </div>
            <button className="pr-12 pl-4">
              <svg
                className="mr-auto inline-block text-black xl:hidden"
                width="33"
                height="50"
                viewBox="0 0 23 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.892578 10.8691H22.1058"
                  stroke="black"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.892578 18.8691H22.1058"
                  stroke="black"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.1066 14.8688H0.893399"
                  stroke="black"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </>
    );
  }
  