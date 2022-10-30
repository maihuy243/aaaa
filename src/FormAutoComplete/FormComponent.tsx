import React from "react";
import FormAutoComplete from "./FormTemplate";
import axios from "axios";
import { useEffect, useState } from "react";

const FormComponent = () => {
  const [
    { largeProducts, productMediums, productSmalls, brands, items },
    setData,
  ] = useState<any>({
    largeProducts: [],
    mediumProducts: [],
    smallProducts: [],
    brandProducts: [],
    itemProducts: [],
  });
  const [size, setSize] = useState<any>({
    productLargeName: null,
    productMediumName: null,
    productSmallName: null,
    brandName: null,
    itemName: null,
  });

  const handleSizeCheck = ({ key, value, keyChild, arrChild }: any) => {
    setSize((prev: any) => ({ ...prev, [key]: value }));
    setData((prev: any) => ({
      ...prev,
      [keyChild]: arrChild || [],
    }));
  };
  const callApi = () => {
    axios.get("http://api.kanesue.test/api/typeOfProduct").then((item: any) => {
      setData((prev: any) => ({
        ...prev,
        largeProducts: item.data.data,
      }));
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <FormAutoComplete
      largeProducts={largeProducts}
      productMediums={productMediums}
      productSmalls={productSmalls}
      brands={brands}
      items={items}
      handleSizeCheck={handleSizeCheck}
      size={size}
    />
  );
};

export default FormComponent;
