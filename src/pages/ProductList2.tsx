import Footer3 from "./Footer3";
import Header1 from "./header1";
import ProductListContent from "./ProductListContent";


function ProductList2() {
    const products = [
        { name: "Apple", price: 1.00 },
        { name: "Banana", price: 0.60 },
        { name: "Carrot", price: 0.30 },
    ];

    

    return (
        <div>
            <Header1></Header1>
            <ProductListContent></ProductListContent>
           
            <Footer3></Footer3>
            
        </div>
    );
};

export default ProductList2;
//This is the main page includes the 3 components (header, content, footer)
