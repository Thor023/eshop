import AsidePerfil from "../components/AsidePerfil";
import Footer from "../components/Footer";
import Ips from "../components/Ips";

export default function IpList() {
  return (
    <>
        <div id="ip-list" className="bg-light">
            <AsidePerfil />
            <Ips />
        </div>
        <Footer />
    </>
  );
}