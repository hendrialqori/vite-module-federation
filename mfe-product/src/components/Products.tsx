import { createUseStyles } from "react-jss";
import { ProductItem, type ItemProduct } from "./ProductItem";
import { useFetch } from "../hooks/useFetch";

export function Products() {
  // instance class
  const classes = useStyles();
  // fetch data from api
  const products = useFetch<ItemProduct[]>("https://fakestoreapi.com/products");

  if (products.loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.container}>
      {products.data?.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
    gap: 20,
    padding: 20,
  },
});
