import ProductListing from "./ProductListing/ProductListing";
import classes from "./ProductGrid.module.css";

function ProductGrid(props) {
    const { productsToDisplay } = props;
    let gridContent;

    if (productsToDisplay.length > 0) {
        gridContent = (
            <div className={classes["product-grid"]}>
                {productsToDisplay.map(product => (
                    <ProductListing
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.images[0]}
                    />
                ))}
            </div>
        );
    } else {
        gridContent = <p>Sorry, no products matched your search.</p>
    }

    return (
        <>
            {gridContent}
        </>
    );
}

export default ProductGrid;