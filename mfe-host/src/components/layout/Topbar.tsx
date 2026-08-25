import { createUseStyles } from "react-jss";
import { ShoppingCart } from "lucide-react";

export const Topbar = () => {
  const classes = useStyles();

  return (
    <header className={classes.topbar}>
      <div className={classes.shoppingCart}>
        <div className={classes.badgeCart}>3</div>
        <ShoppingCart size={20} />
      </div>
    </header>
  );
};

const useStyles = createUseStyles({
  topbar: {
    position: "sticky",
    top: 0,
    zIndex: 10,

    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",

    padding: "22.5px 30px",

    backgroundColor: "#ffffff",
    borderBottom: "1px solid #d1d5db",
  },
  shoppingCart: {
    cursor: "pointer",
    position: "relative",
  },
  badgeCart: {
    position: "absolute",
    top: "-15px",
    right: "-15px",
    borderRadius: "50%",
    backgroundColor: "red",
    color: "white",
    width: "22px",
    height: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
