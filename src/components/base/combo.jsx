import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const Combo = ({
  name,
  lebel,
  options,
  defaultValue,
  noLebel,
  onChange,
}) => {
  const [age, setAge] = useState(defaultValue);

  const handleChange = (event) => {
    setAge(event.target.value);
    onChange(event)
  };
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      {!noLebel && (
        <InputLabel id="demo-simple-select-standard-label">{lebel}</InputLabel>
      )}
      <Select name={name} value={age} onChange={handleChange}>
        {options.map((o) => {
          return (
            <MenuItem key={o.id} value={o.id}>
              {o.title}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Combo;
