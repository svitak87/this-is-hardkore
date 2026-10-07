import "./Location.css";

export const Location = () => {
  return (
    <section className="location" id="ubicacion">
      <h2>¡Caigan!</h2>

      <div className="location-content">
        <div className="location-info">
          <h3>Aquí pillamos:</h3>

          <p>
            <i className="fa-solid fa-location-dot"></i>
            Carrera 27a # 53 - 29, Bogotá, Colombia.
          </p>

          <p>
            <i className="fa-regular fa-clock"></i>
            martes a sábados: 10:00 a 19:30hs
          </p>

          <p>
            <i className="fa-regular fa-clock"></i>
            Domingos: 10:00 a 18:00hs
          </p>
          <p>
            <i className="fa-regular fa-clock"></i>
            Lunes: El horario puede variar Raza
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=This+Is+Hardkore,+Carrera+27a+%2353+-+29,+Bogotá,+Colombia"
            target="_blank"
            rel="noopener noreferrer"
            className="location-button"
          >
            <i className="fa-solid fa-diamond-turn-right"></i>
            Cómo llegarle
          </a>
        </div>

        <div className="location-map">
          <iframe
            src="https://www.google.com/maps?q=This+Is+Hardkore,+Carrera+27a+%2353+-+29,+Bogotá,+Colombia&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de This Is Hardkore"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
