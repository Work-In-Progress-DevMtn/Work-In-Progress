import React from 'react';
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever';
import {white, red500} from 'material-ui/styles/colors';

const iconStyles = {
  marginRight: 24,
};

const RemoveIcon = () => (
  <div>
    <DeleteIcon style={iconStyles} color={white} hoverColor={red500}/>
  </div>
);

export default RemoveIcon;