import {PermissionsAndroid} from 'react-native';
import React from 'react';
import Geolocation from 'react-native-geolocation-service';
import {locationIcon} from '../../../../../../assets';
import {useAppDispatch, weatherActions} from '../../../../../../store';
import {FlexWrapper} from '../../../../../../styled';
import {ItemText, StyledIcon, Wrapper} from './styled';

const SearchListHeaderComponent = () => {
  const dispatch = useAppDispatch();
  const setNewLocation = (city: string) => {
    dispatch(weatherActions.getCurrentWeather(city));
  };
  const handlePress = () => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Geolocation Permission',
            message: 'Can we access your location?',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === 'granted') {
          return true;
        } else {
          return false;
        }
      } catch (err) {
        return false;
      }
    };
    const result = requestLocationPermission();
    result.then(res => {
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            setNewLocation(
              position.coords.latitude + ',' + position.coords.longitude,
            );
          },
          error => {
            console.log(error);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
  };
  return (
    <Wrapper onPress={handlePress}>
      <FlexWrapper
        width="100% "
        align="center"
        justify="space-between"
        direction="row">
        <ItemText>Find by Location</ItemText>
        <StyledIcon xml={locationIcon} fill={'#fff'} />
      </FlexWrapper>
    </Wrapper>
  );
};

export default SearchListHeaderComponent;
