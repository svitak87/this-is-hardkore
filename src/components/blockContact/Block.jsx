import "./Block.css";

export const Block = ({ title, text, icon, href }) => {
  return (
    <article className="info-block">
      <i className={icon} aria-hidden="true"></i>

      <div className="info-block-content">
        <h2>{title}</h2>
        <p>{href ? <a href={href}>{text}</a> : text}</p>
      </div>
    </article>
  );
};
