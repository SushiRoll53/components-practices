export default function List(){
        const products = [
            { name: "Apple", price: 1.00 },
            { name: "Banana", price: 0.60 },
            { name: "Carrot", price: 0.30 },
        ];
    return (<section>
        {products.map((product, key) => (
            <div key={key}>
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
            </div>
        ))}
    </section>)
}
