import { useContext, useState, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import styles from "./Review.module.scss";
import Joi from "joi-browser";
import { saveReview } from "../../services/reviewService";

import { toast } from "react-toastify";

import UserContext from "../../store/userContext";

const NewReview = ({ getReview, productId }) => {
  console.log("NewReview productId ", productId);
  const userCntx = useContext(UserContext);
  const schema = {
    name: Joi.string().required().label("Name"),
    rate: Joi.number().min(1).required().label("rate"),
    text: Joi.string().required().label("text"),
    website: Joi.string().allow(null, "").uri().label("Website"),
    productId: Joi.number().min(1).required().label("productId"),
    email: Joi.string().required().label("Email"), //.email()
  };

  const validate = (data) => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  const passParams = (p) => {
    const user = userCntx.user;
    const error = validate(newReveiw);
    console.log("passParams", p, error);
    if (error) setError(error);
    else {
      console.log("succsess");
      let res = saveReview({
        ...newReveiw,
        userName: user.userName,
        userId: user.userId,
        userImage: user.userImage,
        productId: productId,
      });
      if (res._id) {
        toast.success("Reveiw Saved.");
        //rest state
        setError({
          rate: 0,
          text: null,
          name: null,
          email: null,
          website: null,
        });
        setNewReveiw({
          rate: 0,
          text: "",
          name: "",
          email: "",
          website: "",
          productId: productId,
        });
        ////////
        getReview();
      }
    }
  };
  const [error, setError] = useState({
    rate: 0,
    text: null,
    name: null,
    email: null,
    website: null,
  });

  const [newReveiw, setNewReveiw] = useState({
    rate: 0,
    text: "",
    name: "",
    email: "",
    website: "",
    productId: productId,
  });
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
              <Typography
                component="legend"
                style={{ color: error.rate ? "red" : "black" }}
              >
                Your Rating
              </Typography>
              <Rating
                name="simple-controlled"
                value={newReveiw.rate}
                onChange={(event, newValue) => {
                  setNewReveiw({ ...newReveiw, rate: newValue });
                }}
              />
            </Box>
          </Col>
        </Row>
        {/* style={{ backgroundColor: "#f4f4f4" }} */}
        <Row className="mt-4 mb-4">
          <Col className="">
            <TextField
              style={{ backgroundColor: "#f4f4f4" }}
              required
              label="Comment "
              multiline
              rows={4}
              fullWidth
              error={error.text}
              value={newReveiw.text}
              onChange={({ target: input }) => {
                setNewReveiw({ ...newReveiw, text: input.value });
              }}
            />
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          <Col>
            <TextField
              style={{ backgroundColor: "#f4f4f4" }}
              required
              label="Name "
              fullWidth
              error={error.name}
              value={newReveiw.name}
              onChange={({ target: input }) => {
                setNewReveiw({ ...newReveiw, name: input.value });
              }}
            />
          </Col>
          <Col>
            <TextField
              required
              style={{ backgroundColor: "#f4f4f4" }}
              label="Email"
              fullWidth
              error={error.email}
              value={newReveiw.email}
              onChange={({ target: input }) => {
                setNewReveiw({ ...newReveiw, email: input.value });
              }}
            />
          </Col>
          <Col>
            <TextField
              style={{ backgroundColor: "#f4f4f4" }}
              fullWidth
              label="Website"
              error={error.website}
              value={newReveiw.website}
              onChange={({ target: input }) => {
                setNewReveiw({ ...newReveiw, website: input.value });
              }}
            />
          </Col>
        </Row>
        <Row className="">
          <Col>
            <Button
              onClick={passParams}
              variant="dark"
              className="p-3"
              style={{ width: 200 }}
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
