import './FooterPage.scss';
import footerImage from "../../styles/assets/Grupo 7610.png";

export const FooterPage = () => {
    return (
        <footer className="page-footer">
            <h1 className="title">Con el Patrocinio de</h1>
            <img src={footerImage} className="footer-image" alt="footerImage" />
        </footer>
    )
};
