            
 function sectionComp() = {  
    return(
    <section>
        {products.map((product, key) => (
            <div key={key}>
                <h3>{product.name}</h3>
               <p>${product.price.toFixed(2)}</p>
            </div>
            ))}
    </section>
);}

export default sectionComp;