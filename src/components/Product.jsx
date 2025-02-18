import { productData } from "../data";

function Product() {
  return (
    <div className="flex flex-row">
      {productData.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.product} className="w-full object-cover" />
          </div>
        );
      })}
    </div>
  );
}

export default Product;
