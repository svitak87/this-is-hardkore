import { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo/logo-this-is-hardkore-white.png";

export const Navbar = () => {
  const navRef = useRef(null);
  const collapseRef = useRef(null);
  const togglerRef = useRef(null);

  useEffect(() => {
    const updateOffset = () => {
      const nav = navRef.current;
      const menu = collapseRef.current;
      if (!nav) return;

      const menuHeight =
        menu && menu.classList.contains("show") ? menu.offsetHeight : 0;
      const height = Math.round(nav.offsetHeight - menuHeight);

      document.documentElement.style.setProperty(
        "--navbar-offset",
        `${height}px`
      );
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);

    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  const handleNavClick = (event) => {
    if (!event.target.closest?.("a")) return;

    const menu = collapseRef.current;
    if (!menu || !menu.classList.contains("show")) return;

    const onMenuHidden = () => {
      menu.removeEventListener("hidden.bs.collapse", onMenuHidden);

      const hash = window.location.hash;
      const targetId = hash.length > 1 ? hash.slice(1) : "";
      const target = targetId ? document.getElementById(targetId) : null;

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    menu.addEventListener("hidden.bs.collapse", onMenuHidden);
    togglerRef.current?.click();
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-custom"
      aria-label="Navegación principal"
      ref={navRef}
    >
      <div className="container-fluid">
        <a href="#top" onClick={handleNavClick}>
          <img
            className="navbar-brand"
            src={logo}
            alt="Logo this is hardkore"
          />
        </a>

        <span className="navbar-title">THIS IS HARDKORE</span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Alternar navegación"
          ref={togglerRef}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>
          <ul className="navbar-nav" onClick={handleNavClick}>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#oversize"
              >
                Oversize
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#top">
                Chaquetas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#top">
                Medias
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#top">
                Camisetas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#hoodies">
                Hoodies
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#accesories">
                Accesorios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#eventos">
                Eventos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ubicacion">
                Ubicación
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
