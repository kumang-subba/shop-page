/* eslint-disable react/prop-types */
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Product({ product, handleClick }) {
  return (
    <Badge color="secondary" badgeContent={product.value}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140, width: 350, bgcolor: "gray" }}
          image={product.src}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            €{product.price}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button
            size="small"
            startIcon={<RemoveIcon />}
            onClick={() => handleClick(product, "-")}
          >
            Decrease
          </Button>
          <Button
            size="small"
            startIcon={<AddIcon />}
            onClick={() => handleClick(product, "+")}
          >
            Increase
          </Button>
        </CardActions>
        <Button
          variant="contained"
          size="medium"
          sx={{ marginBottom: "5px" }}
          onClick={() => handleClick(product, "cart")}
        >
          Add to Cart
        </Button>
      </Card>
    </Badge>
  );
}
