import "./Home.css";
import heroImage from "../../assets/images/hero/hero-image.png";
import banderaColombia from "../../assets/images/hero/bandera-colombia.webp"
import posterUno from "../../assets/images/posters/poster-uno.png"
import posterDos from "../../assets/images/posters/poster-dos.png"


import { Navbar } from "../../components/navbar/Navbar.jsx";
import { Events } from "../../components/events/Events.jsx";
import { JustLikeThat } from "../../components/justLikeThat/JustLikeThat.jsx";
import { Oversize } from "../../components/oversize/Oversize.jsx";
import { Accesories } from "../../components/accesories/Accesories.jsx";
import { Location } from "../../components/location/Location.jsx";
import { InfoBlocks } from "../../components/infoBlocks/InfoBlocks.jsx";
import { Hoodies } from "../../components/hoodies/Hoodies.jsx";
import { Footer } from "../../components/footer/Footer.jsx";
import { WhatsApp } from "../../components/whatsapp/WhatsApp.jsx";

export const Home = () => {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main>
        <section className="hero-section">
          <h1 className="hero-title">This is Hardkore, Colombia <img src={banderaColombia} alt="" /></h1>
          <img
            src={heroImage}
            alt="This is Hardkore, marca colombiana de ropa urbana y cultura hip hop"
            className="hero"
            fetchPriority="high"
            decoding="async"
          />
          <h2 className="hero-subtitle">¡La seriedad ante todo! ¿Cómo fue?</h2>
        </section>
        <section className="just-like-that">
          <JustLikeThat />
        </section>
        <section className="contact-section">
          <InfoBlocks />
        </section>
        <section className="oversize">
          <Oversize />
        </section>
        <section className="wall-posters">
          <img src={posterUno} alt="This hardkore" />
          <img src={posterDos} alt="This hardkore" />
        </section>
        <section className="hoodies">
          <Hoodies />
        </section>
        <section className="Location">
          <Location />
        </section>
        <section>
          <Accesories />
        </section>
        <section id="eventos">
          <Events />
        </section>
        <WhatsApp />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
