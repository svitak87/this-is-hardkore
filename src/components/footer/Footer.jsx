import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>This Is Hardkore Colombia</h2>

          <p>
            Ropa urbana, cultura Hip Hop e identidad colombiana. Hecho en Bogotá
            para quienes viven la cultura.
          </p>
        </div>

        <div className="footer-contact">
          <h3>Contacto</h3>

          <p>
            <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
            Avenida Calle 53 #27-34, Galerías, Bogotá, Colombia
          </p>

          <p>
            <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
            <a
              href="https://wa.me/573144057066"
              target="_blank"
              rel="noopener noreferrer"
            >
              +57 314 4057066
            </a>
          </p>


          <p>
            <i className="fa-solid fa-envelope" aria-hidden="true"></i>
            <a href="mailto:thisishardkore@thisishardkore.com">
              thisishardkore@hotmail.com
            </a>
          </p>
        </div>

        <div className="footer-payment" id="medios-de-pago">
          <h3>Medios de pago</h3>

          <div className="payment-icons">
            <i className="fa-brands fa-cc-visa" title="Visa"></i>
            <i className="fa-brands fa-cc-mastercard" title="Mastercard"></i>
            <i className="fa-brands fa-cc-amex" title="American Express"></i>

            <span className="payment-text">Nequi</span>
            <span className="payment-text">Daviplata</span>
            <span className="payment-text">Efectivo</span>
            <span className="payment-text">Transferencia</span>
          </div>
        </div>

        <div className="footer-social">
          <h3>Seguinos</h3>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/thisishardkore/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram This Is Hardkore"
              title="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://www.facebook.com/thisishardkorecolombia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook This Is Hardkore"
              title="Facebook"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} This Is Hardkore Colombia. Todos los
          derechos reservados.
          <br />
          Hecho con <i className="fa-solid fa-heart"></i> en Colombia.
        </p>
      </div>
    </footer>
  );
};
