import React from 'react';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';

const iconStyles = {
  marginRight: 24,
};

const TrashIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

const RemoveIcon = () => (
  <div>
    <TrashIcon style={iconStyles} hoverColor={red500} />
  </div>
);

export default RemoveIcon;