import {View} from 'react-native';
import React from 'react';
import {triangleIcon} from '../../../../../../assets';
import {
  ButtonText,
  FirstTooltipButton,
  MainText,
  Tooltip,
  TooltipButton,
  TriangleIcon,
} from './styled';
import {FlexWrapper} from '../../../../../../styled';
import {
  useAppDispatch,
  useAppSelector,
  getWeatherSelector,
  weatherActions,
} from '../../../../../../store';
import {useThemeColor} from '../../../../../../hooks';
import {TComponentWithSetPageProp} from '../../../../../../types';

const YourCityTooltip = ({setPage}: TComponentWithSetPageProp) => {
  const {theme} = useAppSelector(getWeatherSelector);
  const {color} = useThemeColor(theme);
  const dispatch = useAppDispatch();

  const onChangeButtonPress = () => {
    setPage(0);
    dispatch(weatherActions.hideYourCityTooltip());
  };

  const onConfirmButtonPress = () => {
    dispatch(weatherActions.hideYourCityTooltip());
  };

  return (
    <Tooltip>
      <TriangleIcon fill="white" xml={triangleIcon} />
      <MainText>Is it your city?</MainText>
      <FlexWrapper direction="row" align="center" justify="space-between">
        <FirstTooltipButton bgColor={color} onPress={onChangeButtonPress}>
          <View>
            <ButtonText>Change</ButtonText>
          </View>
        </FirstTooltipButton>
        <TooltipButton bgColor={color} onPress={onConfirmButtonPress}>
          <ButtonText>Yes</ButtonText>
        </TooltipButton>
      </FlexWrapper>
    </Tooltip>
  );
};

export default YourCityTooltip;
