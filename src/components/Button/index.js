import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ScoreIcon from '@material-ui/icons/Score';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import './index.css';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const FloatingButtons = ({ clickPhoto, scoreTasks }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.root} floating-button `}>
      <div className="button-alignment">
        <Tooltip arrow placement="left" title="Score the edited images">
          <Fab color="secondary" aria-label="edit">
            <ScoreIcon onClick={scoreTasks} />
          </Fab>
        </Tooltip>
        <Tooltip
          arrow
          placement="left"
          title="Click a picture to upload it for editing">
          <Fab color="primary" aria-label="add">
            <AddIcon onClick={clickPhoto} />
          </Fab>
        </Tooltip>
      </div>
    </div>
  );
};

const LinkButton = ({
  className,
  label,
  download,
  href,
  onClick,
  children
}) => {
  return (
    <div className="button">
      <a
        onClick={onClick}
        download={download}
        href={href}
        className={className}>
        {label}
      </a>
      {children}
    </div>
  );
};

const Button = ({ label, onClick, type }) => {
  return (
    <button onClick={onClick} className={`button-${type}`}>
      {label}
    </button>
  );
};

export { FloatingButtons, LinkButton, Button };
