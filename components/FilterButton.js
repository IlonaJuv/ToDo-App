import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { buttonStyles } from '../styles/buttonStyles';

const FilterButton = ({ type, isActive, onPress }) => {
  return (
    <TouchableOpacity
      style={[buttonStyles.button, isActive && buttonStyles.buttonActive]}
      onPress={onPress}
    >
      <Text style={buttonStyles.buttonText}>{type}</Text>
    </TouchableOpacity>
  );
};

export default FilterButton;
