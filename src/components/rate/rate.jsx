import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
const Rate = ({ rate, text, noText }) => {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">
        {!noText && text ? text : ""}
        {/* {text && text.length === 0 ? "fuck u" : "Rate"}{" "} */}
      </Typography>
      <Rating readOnly name="simple-controlled" value={rate} />
    </Box>
  );
};

export default Rate;
