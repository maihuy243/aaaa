import React, { useEffect, useState } from "react";
import AutoCompleteTemplate from "./AutoComplete.template";

export default function AutoComplete({
  label,
  parent,
  data,
  handleSizeCheck,
  keyShow,
  keyGet,
  keyChild,
}: any) {
  const [input, setInput] = useState("");
  const [randomKey, setRamdomKey] = useState(String(Math.random() * 1000));

  useEffect(() => {
    handleSizeCheck({
      key: keyGet,
      value: null,
    });
    setInput("");
    setRamdomKey(String(Math.random() * 1000));
  }, [parent]);

  const handleOnChange = (_: any, newValue: any) => {
    if (newValue) {
      handleSizeCheck({
        key: keyGet,
        value: newValue,
        keyChild: keyChild,
        arrChild: newValue[keyChild],
      });
    }
  };

  const handleChangeInput = (_: any, newValue: any) => {
    setInput(newValue);
    if (!newValue) {
      handleSizeCheck({
        key: keyGet,
        value: null,
      });
    }
  };

  return (
    <AutoCompleteTemplate
      randomKey={randomKey}
      handleOnChange={handleOnChange}
      label={label}
      parent={parent}
      data={data}
      keyShow={keyShow}
      handleChangeInput={handleChangeInput}
      input={input}
    />
  );
}
