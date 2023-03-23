/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ModalTable from "./ModalTable";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

export default function Checkoutmodal({ open, handleModalClose, cartItems }) {
  return (
    <Modal
      open={open}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Checkout
          </Typography>
          <ModalTable cartItems={cartItems} />
          <Button sx={{ alignSelf: "flex-end" }}>Procceed to Checkout</Button>
        </Box>
      </div>
    </Modal>
  );
}
