function Products() {
    const products = [
      { name: "CSS developer course", price: "$10.000" },
      {name: "JS developer course", price: "$20.000" },
      { name: "Both languages with a special discount ", price: "$38.000" }
      ];
      
      return (
      <div>
      <h1>Products</h1>
      <ul>
      {products.map((product, index) => (
      <li key={index}>
      {product.name} - {product.price}
      </li>
      ))}
      </ul>
      </div>
      );
      }
      
      export default Products;