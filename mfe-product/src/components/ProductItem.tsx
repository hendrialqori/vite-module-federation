import { createUseStyles } from "react-jss";

export type ItemProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export function ProductItem({ item }: { item: ItemProduct }) {
  const classes = useStyles();

  return (
    <div className={classes.itemContainer}>
      <img src={item.image} alt={item.title} className={classes.image} />
      <div className={classes.content}>
        <h2 className={classes.title}>{truncateText(item.title, 30, "..")}</h2>
        <p className={classes.price}>${item.price.toFixed(2)}</p>
        <p className={classes.desc}>{truncateText(item.description, 60)}</p>
      </div>
      <div className={classes.actions}>
        <button>Add to Cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  itemContainer: {
    border: "1px solid #ccc",
    textAlign: "center",
    paddingTop: 20,
  },
  image: {
    width: "100%",
    maxWidth: "100%",
    height: "300px",
    objectFit: "contain",
    display: "block",
  },
  content: {
    marginTop: 20,
    "& > *": {
      marginTop: 5,
    },
  },
  title: {
    fontSize: "1rem",
  },
  price: {
    fontSize: "1.2rem",
  },
  desc: {
    color: "#555",
  },
  actions: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    marginTop: 20,
    "& > button": {
      padding: 10,
      border: "none",
      borderTop: "1px solid #ccc",
      backgroundColor: "#fff",

      "&:first-child": {
        borderRight: "1px solid #ccc",
      },

      "&:hover": {
        backgroundColor: "#f0f0f0",
        cursor: "pointer",
      },
    },
  },
});

const truncateText = (text: string, maxLength: number, dots = "...") => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + dots;
};
