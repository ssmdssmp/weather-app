import React, {useEffect, useRef} from 'react';
import {StyleSheet} from 'react-native';
import PagerView from 'react-native-pager-view';
import Animated, {useHandler, useEvent} from 'react-native-reanimated';
import {useThemeColor} from '../hooks/useThemeColor';
import {WeatherScreen, CalendarScreen, SetLocationScreen} from '../screens';
import {getWeatherSelector} from '../store/modules';
import {weatherActions} from '../store/modules/weather/reducer';
import {useAppDispatch, useAppSelector} from '../store/types';
const AnimatedPager = Animated.createAnimatedComponent(PagerView);

export function usePagerScrollHandler(handlers: any, dependencies?: any) {
  const {context, doDependenciesDiffer} = useHandler(handlers, dependencies);
  const subscribeForEvents = ['onPageScroll'];

  return useEvent<any>(
    event => {
      'worklet';
      const {onPageScroll} = handlers;
      if (onPageScroll && event.eventName.endsWith('onPageScroll')) {
        onPageScroll(event, context);
      }
    },
    subscribeForEvents,
    doDependenciesDiffer,
  );
}

const TestScreen = () => {
  const dispatch = useAppDispatch();
  const {data} = useAppSelector(getWeatherSelector);
  const {color} = useThemeColor(data.current.is_day);
  const ref = useRef<PagerView>(null);
  useEffect(() => {
    dispatch(weatherActions.setTheme(color));
  }, [color, dispatch]);
  const setPage = (index: number) => ref.current?.setPage(index);
  return (
    <AnimatedPager style={styles.pagerView} initialPage={1} ref={ref}>
      <SetLocationScreen key="1" />
      <WeatherScreen setPage={setPage} key="2" />
      <CalendarScreen key="3" />
    </AnimatedPager>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});
export default TestScreen;
