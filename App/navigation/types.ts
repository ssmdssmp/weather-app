import {NavigationContainerRef} from '@react-navigation/native';
export type TRootStackParamList = {
  Location: undefined;
  Weather: undefined;
  Calendar: undefined;
};
export type TNavigationProps = {
  navigation: NavigationContainerRef<TRootStackParamList>;
};
