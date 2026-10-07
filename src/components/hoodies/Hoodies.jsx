import { ProductBlock } from "../productBlock/ProductBlock";
import { products } from "../../assets/databases/products/products";
import "./Hoodies.css";

export const Hoodies = () => {
  const hoodiesProducts = products.filter(
    (product) => product.category === "hoodies"
  );
  return (
    <section id="hoodies">
      <h2>Hoodies</h2>

      <div className="products-grid">
        {hoodiesProducts.map((product) => (
          <ProductBlock
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};
