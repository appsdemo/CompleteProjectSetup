import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Product from './Product';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 25
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function ProductListing() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  function handleChange(event, value) {
    setSpacing(Number(value));
  }

  var products = [
  {
    index: 1,
    title: "Product-Name 1",
    subtitle: "SmartPhone",
    shortDescription: "iPhone 7 introduces an all‑new glass design. The world’s most popular camera, now even better. The most powerful and smartest chip ever in a smartphone. Wireless charging that’s truly effortless. And augmented reality experiences never before possible.",
    fullDescription: "iPhone 8 introduces an all‑new glass design. The world’s most popular camera, now even better. The most powerful and smartest chip ever in a smartphone. Wireless charging that’s truly effortless. And augmented reality experiences never before possible. iPhone 8. A new generation of iPhone. Augmented Reality: A11 Bionic powers extraordinary augmented reality apps and games that will change the way you see the world. Apple‑Designed GPU: The new Apple‑designed three‑core GPU is up to 30% faster than A10 Fusion. Faster CPU: Introducing A11 Bionic. With four efficiency cores that are up to 70 percent faster than A10 Fusion. And two performance cores that are up to 25% faster."
  },
  {
    index: 2,
    title: "Product-Name 2",
    subtitle: "SmartPhone 1",
    shortDescription: "iPhone 8 introduces an all‑new glass design. The world’s most popular camera, now even better. The most powerful and smartest chip ever in a smartphone. Wireless charging that’s truly effortless. And augmented reality experiences never before possible.",
    fullDescription: "iPhone 8 introduces an all‑new glass design. The world’s most popular camera, now even better. The most powerful and smartest chip ever in a smartphone. Wireless charging that’s truly effortless. And augmented reality experiences never before possible. iPhone 8. A new generation of iPhone. Augmented Reality: A11 Bionic powers extraordinary augmented reality apps and games that will change the way you see the world. Apple‑Designed GPU: The new Apple‑designed three‑core GPU is up to 30% faster than A10 Fusion. Faster CPU: Introducing A11 Bionic. With four efficiency cores that are up to 70 percent faster than A10 Fusion. And two performance cores that are up to 25% faster."
  },
  {
    index: 3,
    title: "Product-Name 3",
    subtitle: "SmartPhone 1",
    shortDescription: "iPhone 8 introduces an all‑new glass design. The world’s most popular camera, now even better. The most powerful and smartest chip ever in a smartphone. Wireless charging that’s truly effortless. And augmented reality experiences never before possible.",
    fullDescription: "iPhone 8 introduces an all‑new glass design. The world’s most popular camera, now even better. The most powerful and smartest chip ever in a smartphone. Wireless charging that’s truly effortless. And augmented reality experiences never before possible. iPhone 8. A new generation of iPhone. Augmented Reality: A11 Bionic powers extraordinary augmented reality apps and games that will change the way you see the world. Apple‑Designed GPU: The new Apple‑designed three‑core GPU is up to 30% faster than A10 Fusion. Faster CPU: Introducing A11 Bionic. With four efficiency cores that are up to 70 percent faster than A10 Fusion. And two performance cores that are up to 25% faster."
  },
  {
    index: 4,
    title: "Product-Name 4",
    subtitle: "SmartPhone 1",
    shortDescription: "iPhone 8 introduces an all‑new glass design. The world’s most popular camera, now even better. The most powerful and smartest chip ever in a smartphone. Wireless charging that’s truly effortless. And augmented reality experiences never before possible.",
    fullDescription: "iPhone 8 introduces an all‑new glass design. The world’s most popular camera, now even better. The most powerful and smartest chip ever in a smartphone. Wireless charging that’s truly effortless. And augmented reality experiences never before possible. iPhone 8. A new generation of iPhone. Augmented Reality: A11 Bionic powers extraordinary augmented reality apps and games that will change the way you see the world. Apple‑Designed GPU: The new Apple‑designed three‑core GPU is up to 30% faster than A10 Fusion. Faster CPU: Introducing A11 Bionic. With four efficiency cores that are up to 70 percent faster than A10 Fusion. And two performance cores that are up to 25% faster."
  },
  {
    index: 5,
    title: "Product-Name 5",
    subtitle: "SmartPhone 1",
    shortDescription: "iPhone 8 introduces an all‑new glass design. The world’s most popular camera, now even better. The most powerful and smartest chip ever in a smartphone. Wireless charging that’s truly effortless. And augmented reality experiences never before possible.",
    fullDescription: "iPhone 8 introduces an all‑new glass design. The world’s most popular camera, now even better. The most powerful and smartest chip ever in a smartphone. Wireless charging that’s truly effortless. And augmented reality experiences never before possible. iPhone 8. A new generation of iPhone. Augmented Reality: A11 Bionic powers extraordinary augmented reality apps and games that will change the way you see the world. Apple‑Designed GPU: The new Apple‑designed three‑core GPU is up to 30% faster than A10 Fusion. Faster CPU: Introducing A11 Bionic. With four efficiency cores that are up to 70 percent faster than A10 Fusion. And two performance cores that are up to 25% faster."
  },
  {
    index: 6,
    title: "Product-Name 6",
    subtitle: "SmartPhone 1",
    shortDescription: "iPhone 8 introduces an all‑new glass design. The world’s most popular camera, now even better. The most powerful and smartest chip ever in a smartphone. Wireless charging that’s truly effortless. And augmented reality experiences never before possible.",
    fullDescription: "iPhone 8 introduces an all‑new glass design. The world’s most popular camera, now even better. The most powerful and smartest chip ever in a smartphone. Wireless charging that’s truly effortless. And augmented reality experiences never before possible. iPhone 8. A new generation of iPhone. Augmented Reality: A11 Bionic powers extraordinary augmented reality apps and games that will change the way you see the world. Apple‑Designed GPU: The new Apple‑designed three‑core GPU is up to 30% faster than A10 Fusion. Faster CPU: Introducing A11 Bionic. With four efficiency cores that are up to 70 percent faster than A10 Fusion. And two performance cores that are up to 25% faster."
  },
]

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2, 3, 4, 5].map(value => (
            <Grid key={value} item>
              <Product product={products[value]}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
