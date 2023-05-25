import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {InnerView} from './styled';

const DismissKeyboard = () => {
  const handlePress = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <InnerView />
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;
