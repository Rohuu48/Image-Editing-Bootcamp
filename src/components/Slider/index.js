import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import './index.css';

const useStyles = makeStyles({
  root: {
    width: 250
  },
  input: {
    width: 42,
    color: 'red'
  }
});

const InputSlider = ({ image }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  useEffect(() => {
    let markedImg = '';
    let imgObj = image;
    Object.assign(imgObj, {
      marks: value
    });
    localStorage.setItem('marked_img', JSON.stringify(imgObj));
    markedImg = JSON.parse(localStorage.getItem('marked_img'));
    return () => {
      console.log(markedImg);
    };
  }, [value]);

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 10) {
      setValue(10);
    }
  };

  return (
    <div className="slider-container">
      <div className="caption">
        <Typography
          id="input-slider"
          className="heading"
          gutterBottom
          variant="h5"
          align="center">
          Marks
        </Typography>
      </div>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            max={10}
            min={0}
            step={1}
            defaultValue={0}
            valueLabelDisplay="on"
            color="secondary"
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            type="number"
            color="secondary"
            inputProps={{
              step: 1,
              min: 0,
              max: 10,
              type: 'number',
              'aria-labelledby': 'input-slider'
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default InputSlider;
