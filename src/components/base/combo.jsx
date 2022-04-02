import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Row, Col } from "react-bootstrap";
import styles from './Combo.module.scss'

const Combo = ({ name, lebel, options, defaultValue, noLebel, onChange }) => {
  const [age, setAge] = useState(defaultValue);

  const handleChange = (event) => {
    setAge(event.target.value);
    onChange(event);
  };
  return (
    <FormControl variant="standard" sx={{ minWidth: 170 }}>
      <Row className={styles['custom-combo']}>
        <Col>
          {!noLebel && (
            <InputLabel style={{ minWidth: 50 }}>{lebel} :</InputLabel>
          )}
        </Col>
        <Col>
          <Select name={name} value={age} onChange={handleChange}>
            {options.map((o) => {
              return (
                <MenuItem key={o.id} value={o.id}>
                  {o.title}
                </MenuItem>
              );
            })}
          </Select>
        </Col>
      </Row>
    </FormControl>
  );
};

export default Combo;
