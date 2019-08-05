import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    padding: 30,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

function ProductRecallFunction(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    age: '',
    multiline: '',
    currency: 'EUR',
    orderId: ''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Card className={classes.card}>

      <CardHeader
        title="Recall your defective products"
      />

      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="Product Name"
          className={classes.textField}
          value={values.name}
          onChange={handleChange('name')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Order ID"
          value={values.orderId}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="IMEI"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Refund Currency"
          className={classes.textField}
          value={values.currency}
          onChange={handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
          variant="outlined"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </form>
      <Button variant="contained" color="secondary" className="btn-submit" onClick={() => {props.onSubmit()}}>
        SUBMIT
      </Button>
    </Card>
  );
}

export default class ProductRecall extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      values: {

      }
    }
  }

  submitForm = () => {
    // this.state.isSubmitted = true
    this.setState({isSubmitted: true}, function () {
      console.log(this.state);
    });
  }

  render() {
    return (<ProductRecallFunction onSubmit={this.submitForm}/>)
  }
}
