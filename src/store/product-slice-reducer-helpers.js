const testAgainstSearchFilter = function testAgainstSearchFilter(product, searchValue) {
    if (!searchValue || searchValue.length < 2) return true;

    const searchValueSegments = searchValue.toLowerCase().split(" ");
    const productNameSegments = product.name.toLowerCase().split(" ");
    const productBrandSegments = product.brand.toLowerCase().split(" ");

    const searchables = [
        product.id,
        ...productNameSegments,
        ...productBrandSegments,
        ...product.keywords,
    ];

    // Pop removes element and returns it; after pop() searchValueSegments has last element removed 
    const lastSearchSegment = searchValueSegments.pop();
    const earlierSearchSegments = searchValueSegments;

    const lastSegmentMatches = searchables.find(searchable => {
        return searchable.slice(0, lastSearchSegment.length) === lastSearchSegment;
    });

    const earlierSegmentsMatch = earlierSearchSegments.every(segment => searchables.includes(segment));

    const searchValueMatches = earlierSegmentsMatch && !!lastSegmentMatches;

    return searchValueMatches;
};


const testAgainstCategoryFilter = function testAgainstCategoryFilter(productCategory, categoryFilter) {
    const allCategoriesAllowed = (categoryFilter === "All");
    const categoryMatchesFilter = (productCategory === categoryFilter);

    if (allCategoriesAllowed || categoryMatchesFilter) {
        return true;
    } else {
        return false;
    }
};


const testAgainstBrandsFilter = function testAgainstBrandsFilter(productBrand, brandsFilter) {
    const allBrandsAllowed = (brandsFilter.length === 0);
    const brandMatchesFilter = (brandsFilter.includes(productBrand));

    if (allBrandsAllowed || brandMatchesFilter) {
        return true;
    } else {
        return false;
    }
};


const testAgainstPriceFilter = (product, priceFilter) => {
    const isMinPriceFilter = priceFilter.min || priceFilter.min === 0;
    const isMaxPriceFilter = priceFilter.max || priceFilter.max === 0;
    if (isMinPriceFilter && product.price < priceFilter.min) return false;
    if (isMaxPriceFilter && product.price > priceFilter.max) return false;
    return true;
};


const applyFilters = function applyFilters(allProducts, filters) {

    const productsMatchingFilters = allProducts.filter(product => {
        const matchesSearchValue = testAgainstSearchFilter(product, filters.search);
        const matchesCategoryFilter = testAgainstCategoryFilter(product.category, filters.category);
        const matchesBrandFilter = testAgainstBrandsFilter(product.brand, filters.brands);
        const matchesPriceFilter = testAgainstPriceFilter(product, filters.price);

        const matchesAll = matchesSearchValue
            && matchesCategoryFilter
            && matchesBrandFilter
            && matchesPriceFilter;

        return matchesAll;
    });

    return productsMatchingFilters;
};


const sortProducts = function sortProducts(products, sorting) {
    const isSortByPrice = (sorting.slice(0, 5) === "PRICE");
    let sortedProducts;

    if (isSortByPrice) {
        sortedProducts = products.sort((product, otherProduct) => product.price - otherProduct.price);
    }

    if (sorting === "PRICE_HIGH_TO_LOW") {
        sortedProducts = sortedProducts.reverse();
    }

    return sortedProducts || products;
};


export default {
    applyFilters,
    sortProducts,
};