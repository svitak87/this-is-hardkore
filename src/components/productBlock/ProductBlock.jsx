import "./ProductBlock.css"
export const ProductBlock = ({ product }) => {
  const { name, description, sizes, colors, image } = product;

  return (
    <article className="card-container">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>{description}</p>

      <ul>
        {sizes.map((size, index) => (
          <li key={index}>{size}</li>
        ))}
      </ul>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </article>
  );
};
