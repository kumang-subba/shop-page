import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Nav from "./components/Nav";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
import Checkoutmodal from "./components/Checkout-Modal";

const App = () => {
  const [products, setProducts] = useState(() => {
    const arr = [];
    for (let i = 1; i <= 4; i++) {
      arr.push({
        id: i,
        value: 0,
        src: `/images/products/car${i}.avif`,
        name: `Car Number ${i}`,
        price: i * 500,
      });
    }
    return arr;
  });
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(sessionStorage.getItem("cart")) || [];
  });
  const [snackOpen, setSnackOpen] = useState(false);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  const handleClick = (product, input) => {
    if (input === "+") {
      setProducts((prev) =>
        prev.map((i) => {
          if (i === product) {
            return { ...i, value: product.value + 1 };
          }
          return i;
        })
      );
    } else if (input === "-") {
      if (product.value <= 0) {
        return;
      }
      setProducts((prev) =>
        prev.map((i) => {
          if (i === product) {
            return { ...i, value: product.value - 1 };
          }
          return i;
        })
      );
    } else if (input === "cart") {
      if (product.value > 0) {
        const newCart = [...cartItems, product];
        setCartItems(findDupUpdateVal(newCart));
        setSnackOpen(true);
        const resetProduct = products.map((i) => {
          if (i === product) {
            return { ...i, value: 0 };
          }
          return i;
        });
        setProducts(resetProduct);
      }
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };

  function findDupUpdateVal(arr) {
    return arr.reduce((acc, currentVal, index, self) => {
      if (index === self.findIndex((e) => e.id === currentVal.id)) {
        acc.push(currentVal);
      } else {
        // if there's a duplicate then update quanitity
        acc[acc.findIndex((e) => e.id === currentVal.id)].value +=
          currentVal.value;
      }
      return acc;
    }, []);
  }

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  const handleModalClose = () => {
    setOpen(false);
  };
  const handleModalOpen = () => {
    setOpen(true);
  };
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="app">
      <Checkoutmodal
        open={open}
        handleModalClose={handleModalClose}
        cartItems={cartItems}
        clearCart={clearCart}
      />
      <BrowserRouter>
        <Nav cartItems={cartItems} handleModalOpen={handleModalOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop products={products} handleClick={handleClick} />}
          />
        </Routes>
      </BrowserRouter>
      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Added to cart"
        action={action}
      />
    </div>
  );
};

export default App;
