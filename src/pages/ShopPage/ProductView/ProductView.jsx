import { useLoaderData } from "react-router-dom";
import BackToShopLink from "./BackToShopLink";
import MainProductContent from "./MainProductContent/MainProductContent";
import RelatedProductsCarousel from "../../../components/RelatedProductsCarousel/RelatedProductsCarousel";
import classes from "./ProductView.module.css";

function ProductView() {
    const productData = useLoaderData();
    const {
        id,
        name,
        price,
        description,
        images,
        brand,
        category,
        keywords
    } = productData;

    return (
        <div className={classes["product-view-layout"]}>
            <BackToShopLink />
            <MainProductContent
                productData={{ id, name, price, description, images }}
            />
            <RelatedProductsCarousel
                name={name}
                brand={brand}
                category={category}
                keywords={keywords}
            />
        </div>
    );
}

export default ProductView;