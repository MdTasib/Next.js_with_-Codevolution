export default function ProductLists({ products }) {
  return (
    <>
      <h2>List of products</h2>
      {
        products.map(product => {
          return (
            <div key={product.id}>
              <h2>{product.id} {product.title} {product.price}</h2>
              <hr />
            </div>
          )
        })
      }
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:4000/products');
  const data = await response.json();

  return {
    props: {
      products: data
    }
  }
}