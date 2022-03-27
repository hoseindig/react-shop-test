import { useContext, useState, useEffect } from "react";

import { Row, Col, Container, Button } from "react-bootstrap";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import styles from "./Review.module.scss";
const NewReview = () => {
  const [userRate, setUserRate] = useState(5);

  return (
    <div>
      <div className={styles["add-new-review"]}>
        <Row className="">
          <Col md={12}>
            <h4>ADD A REVIEW</h4>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Typography component="legend">Your Rating</Typography>
              <Rating
                name="simple-controlled"
                value={userRate}
                onChange={(event, newValue) => {
                  setUserRate(newValue);
                }}
              />
            </Box>
          </Col>
        </Row>
        <Row>
          <Col className="">
            <span>Comment</span>
            <TextareaAutosize
              style={{
                width: "100%",
                height: 150,
              }}
              maxRows={4}
              aria-label="maximum height"
              placeholder=""
              defaultValue=""
            />
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          <Col>
            <TextField
              required
              id="outlined-required"
              label="Name "
              defaultValue=""
              fullWidth
            />
          </Col>
          <Col>
            <TextField
              required
              id="outlined-required"
              label="Email"
              defaultValue=""
              fullWidth
            />
          </Col>
          <Col>
            <TextField
              fullWidth
              id="outlined-required"
              label="Website"
              defaultValue=""
            />
          </Col>
        </Row>
        <Row className="">
          <Col>
            <Button
              variant="dark"
              className="p-3"
              style={{ width: 200, "text-transform": "uppercase" }}
            >
              Post Comment
            </Button>
          </Col>
        </Row>
      </div>{" "}
    </div>
  );
};

export default NewReview;
