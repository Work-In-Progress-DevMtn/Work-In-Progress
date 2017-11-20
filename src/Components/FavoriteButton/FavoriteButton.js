import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
    height: 35
  },
};

const FavoriteButton = () => (
  <div>
    <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
      <RadioButton
        value="ludicrous"
        label=''
        checkedIcon={<ActionFavorite style={{color: '#57BC90'}} />}
        uncheckedIcon={<ActionFavoriteBorder />}
        style={styles.radioButton}
      />
    </RadioButtonGroup>
  </div>
);

export default FavoriteButton;