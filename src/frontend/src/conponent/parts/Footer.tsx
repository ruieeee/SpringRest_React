import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    //position: "absolute" /*←絶対位置*/,
    bottom: 0 /*下に固定*/,
  },
}));

const Footer: React.FC = (props: any) => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <footer>
        　<p>&copy; react. 2021.</p>
      </footer>
    </div>
  );
};

export default Footer;
