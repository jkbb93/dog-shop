import ImageGallery from "./ImageGallery/ImageGallery";
import ProductMainDetails from "./ProductMainDetails/ProductMainDetails";
import AddToCartForm from "./AddToCartForm/AddToCartForm";
import ProductDescription from "./ProductDescription";
import classes from "./MainProductContent.module.css";

function MainProductContent(props) {
    const { id, name, price, description, images } = props.productData;
    const productMainDetails = { name, price };
    const addToCartFormData = { id, name, price, mainImage: images[0] };

    return (
        <section className={classes["main-product-content"]}>
            <div>
                <ImageGallery images={images} />
            </div>
            <div className={classes["product-details-and-add-to-cart"]}>
                <ProductMainDetails productData={productMainDetails} />
                <AddToCartForm productData={addToCartFormData} />
                <ProductDescription description={description} />
            </div>
        </section>
    );
}

export default MainProductContent;