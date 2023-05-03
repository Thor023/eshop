import AsidePerfil from "../components/AsidePerfil";
import Footer from "../components/Footer";
import AdminUsers from "../components/AdminUsers";
import '../css/styles.css'

export default function Inventory() {
  return (
    <>
        <div id="inventario" className="bg-light">
            <AsidePerfil />
            <AdminUsers />
        </div>
        <Footer />
    </>
  );
}