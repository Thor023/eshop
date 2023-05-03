import AsidePerfil from "../components/AsidePerfil";
import Footer from "../components/Footer";
import ServersFormHero from "../components/ServersFormHero";
import '../css/styles.css'

export default function Inventory() {
  return (
    <>
        <div id="inventario" className="bg-light">
            <AsidePerfil />
            <ServersFormHero />
        </div>
        <Footer />
    </>
  );
}