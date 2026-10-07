import "./JustLikeThat.css";
import perchoUno from "../../assets/images/perchos/percho-uno.png";
import perchoDos from "../../assets/images/perchos/percho-dos.png";
import perchoTres from "../../assets/images/perchos/percho-tres.png";
import perchoCuatro from "../../assets/images/perchos/percho-cuatro.png";

export const JustLikeThat = () => {
  return (
    <>
      <h2 className="section-title">Re-perchos</h2>

      <div className="perchos-container">
        <img
          src={perchoUno}
          alt="Re-percho de This Hardkore"
          className="perchos-image"
        />

        <img
          src={perchoDos}
          alt="Re-percho de This Hardkore"
          className="perchos-image"
        />

        <img
          src={perchoTres}
          alt="Re-percho de This Hardkore"
          className="perchos-image"
        />

        <img
          src={perchoCuatro}
          alt="Re-percho de This Hardkore"
          className="perchos-image"
        />
      </div>
    </>
  );
};