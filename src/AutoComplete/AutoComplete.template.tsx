import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

const AutoCompleteTemplate = ({
  handleOnChange,
  label,
  parent,
  data,
  keyShow,
  input,
  handleChangeInput,
  randomKey,
}: any) => {
  return (
    <div className="flex items-center w-[300px] px-[8px] mb-[8px]">
      <div className="w-[24%] text-left font-bold whitespace-nowrap mr-[16px]">
        {label}
      </div>
      <Autocomplete
        key={randomKey}
        inputValue={input}
        options={data}
        getOptionLabel={(options: any) => String(options[keyShow])}
        sx={{ width: 200 }}
        renderInput={(params: any) => (
          <TextField
            {...params}
            inputProps={{ ...params.inputProps, maxLength: 20 }}
          />
        )}
        onInputChange={handleChangeInput}
        onChange={handleOnChange}
        disabled={!parent}
      />
    </div>
  );
};

export default AutoCompleteTemplate;
