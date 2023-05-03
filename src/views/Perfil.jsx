import AsidePerfil from "../components/AsidePerfil";
import Footer from "../components/Footer";
import Perfil from "../components/Perfil";
import '../css/styles.css'



export default function PerfilView() {
    return (
        <>
            <div id="perfil" className="bg-light">
                <AsidePerfil />
                <Perfil />
            </div>
            <Footer />
        </>
    );
}
