import AutoCompleteComponent from "../AutoComplete/AutoComplete.component";

const FormTemplate = ({
  largeProducts,
  productMediums,
  productSmalls,
  brands,
  items,
  handleSizeCheck,
  size,
}: any) => {
  return (
    <div className="flex items-center justify-center">
      <AutoCompleteComponent
        label="Large"
        data={largeProducts}
        handleSizeCheck={handleSizeCheck}
        parent={true}
        keyShow="productLargeCode"
        keyChild="productMediums"
        keyGet="productLargeName"
      />
      <AutoCompleteComponent
        label="Medium"
        data={productMediums}
        handleSizeCheck={handleSizeCheck}
        parent={size.productLargeName}
        keyShow="productMediumCode"
        keyChild="productSmalls"
        keyGet="productMediumName"
      />
      <AutoCompleteComponent
        label="Small"
        data={productSmalls}
        handleSizeCheck={handleSizeCheck}
        parent={size.productMediumName}
        keyShow="productSmallCode"
        keyChild="brands"
        keyGet="productSmallName"
      />
      <AutoCompleteComponent
        label="Brand"
        data={brands}
        handleSizeCheck={handleSizeCheck}
        parent={size.productSmallName}
        keyShow="brandCode"
        keyChild="items"
        keyGet="brandName"
      />
      <AutoCompleteComponent
        label="Item"
        data={items}
        handleSizeCheck={handleSizeCheck}
        parent={size.brandName}
        keyShow="itemCode"
        keyGet="itemName"
      />
    </div>
  );
};

export default FormTemplate;
