import "./Oversize.css"
import { ProductBlock } from "../productBlock/ProductBlock";
import { products } from "../../assets/databases/products/products";
import "./Oversize.css";

export const Oversize = () => {
  const oversizeProducts = products.filter(
    (product) => product.category === "oversize"
  );
  return (
    <section id="oversize">
      <h2>Oversize</h2>

      <div className="products-grid">
        {oversizeProducts.map((product) => (
          <ProductBlock
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};
