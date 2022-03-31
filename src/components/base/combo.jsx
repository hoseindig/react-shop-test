import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const Combo = ({ lebel, options, defaultValue, noLebel }) => {
  const [age, setAge] = useState(defaultValue);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      {!noLebel && (
        <InputLabel id="demo-simple-select-standard-label">{lebel}</InputLabel>
      )}
      <Select value={age} onChange={handleChange}>
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
