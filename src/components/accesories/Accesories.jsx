import { ProductBlock } from "../productBlock/ProductBlock";
import { products } from "../../assets/databases/products/products";
import "./Accesories.css"

export const Accesories = () => {
const accesoriesProducts = products.filter(
    (product) => product.category === "accesorios"
  );
  return (
    <section id="accesories">
      <h2>Accesorios</h2>

      <div className="products-grid">
        {accesoriesProducts.map((product) => (
          <ProductBlock
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
