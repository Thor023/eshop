import AsidePerfil from "../components/AsidePerfil";
import Footer from "../components/Footer";
import ServersListHero from "../components/ServersListHero";
import '../css/styles.css'

export default function Inventory() {
  return (
    <>
        <div id="inventario" className="bg-light">
            <AsidePerfil />
            <ServersListHero />
        </div>
        <Footer />
    </>
  );
}