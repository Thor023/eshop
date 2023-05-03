import AsidePerfil from "../components/AsidePerfil";
import Footer from "../components/Footer";
import NewServer from "../components/NewServer";
import '../css/styles.css'

export default function NewServers() {
    return (
        <>
            <div id="new-perfil" className="bg-light">
                <AsidePerfil />
                <NewServer />
            </div>
            <Footer />
        </>
    );
}