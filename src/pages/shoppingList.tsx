import footerComp from './componets/footer'; 
import headerComp from './componets/header';
import sectionComp from './componets/section';


function ShoppingList() {
    const products = [
        { name: "Apple", price: 1.00 },
        { name: "Banana", price: 0.60 },
        { name: "Carrot", price: 0.30 },
    ];

    return (
        <div>
            <headerComp />
            <sectionComp />
            <footerComp />
  
        </div>
    );
};

export default ShoppingList;
