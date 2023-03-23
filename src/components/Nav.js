/* eslint-disable react/prop-types */
import * as React from "react";
import { useLocation } from "react-router-dom";

import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { Typography } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(5),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

export default function Nav({ cartItems, handleModalOpen }) {
  const location = useLocation();
  const getTotal = () => {
    const total = cartItems.reduce((a, b) => ({
      value: a.value + b.value,
    })).value;
    return total;
  };
  return (
    <div className="nav-bar">
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <StyledBreadcrumb
            component="a"
            href="/"
            label="Home"
            icon={<HomeIcon fontSize="large" />}
          />
          <StyledBreadcrumb
            icon={<ShoppingCartIcon fontSize="medium" />}
            component="a"
            href="/shop"
            label="Shop"
          />
        </Breadcrumbs>
      </div>
      <div className="pageheadings">
        {location.pathname === "/" ? "Home" : "Shop"}
      </div>
      <div className="nav-content">
        <FlashOnIcon color="action" sx={{ fontSize: 45 }} />
        <Typography variant="h3" className="navhead">
          Cars
        </Typography>
      </div>

      {cartItems.length > 0 && (
        <div className="checkout-btn">
          <Badge color="success" badgeContent={getTotal()}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              sx={{ bgcolor: "white" }}
              onClick={handleModalOpen}
            >
              <ShoppingCartCheckoutIcon fontSize="large" />
            </IconButton>
          </Badge>
        </div>
      )}
    </div>
  );
}
