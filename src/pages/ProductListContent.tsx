
function ProductListContent() {
    const products = [
        { name: "Apple", price: 1.00 },
        { name: "Banana", price: 0.60 },
        { name: "Carrot", price: 0.30 },
    ];

    // Example on how the return should look 
    // after spliting in into component
    // <Header />
    // <ProductList />
    // <Footer />

    return (
        <div>
           
           <section>
                {products.map((product, key) => (
                    <div key={key}>
                        <h3>{product.name}</h3>
                        <p>${product.price.toFixed(2)}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default ProductListContent;
// This compomponent only shows the middle section
