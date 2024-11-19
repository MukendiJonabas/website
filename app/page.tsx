import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Herosection";
import Partenaires from "@/components/Partenaires";
import Confiance from "@/components/Confiance";
import Digipublic from "@/components/Digipublic";
import Easypay from "@/components/Easypay";
import Payday from "@/components/payday";
import Imagefin from "@/components/jean";
import Finalsection from "@/components/Finalsection";
import Casescontact from "@/components/casecontact";
export default function Home() {
  return (
    <div>
      <Header />

      <HeroSection />
      <Partenaires />
      <Confiance />
      <Digipublic />
      <Easypay />
      <Payday />
      <Imagefin />
      <Finalsection />
      <Casescontact />
      <Footer />
    </div>
  );
}
