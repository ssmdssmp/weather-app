import React, {useEffect, useRef} from 'react';
import {StyleSheet} from 'react-native';
import PagerView from 'react-native-pager-view';
import Animated, {useHandler, useEvent} from 'react-native-reanimated';
import {WeatherScreen, CalendarScreen, SetLocationScreen} from '../screens';
import {getWeatherSelector} from '../store/modules';
import {weatherActions} from '../store/modules/weather/reducer';
import {useAppDispatch, useAppSelector} from '../store';

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

const Navigation = () => {
  const dispatch = useAppDispatch();
  const {data} = useAppSelector(getWeatherSelector);

  useEffect(() => {
    const hours = new Date().getHours();
    dispatch(weatherActions.setTheme(hours > 19 ? 'dark' : 'light'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data.location.name === '') {
      dispatch(weatherActions.getInitialLocation());
    } else {
      dispatch(weatherActions.getCurrentWeather(data.location.name));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ref = useRef<PagerView>(null);
  const setPage = (index: number) => ref.current?.setPage(index);

  return (
    <AnimatedPager initialPage={1} style={styles.pagerView} ref={ref}>
      <SetLocationScreen setPage={setPage} key="1" />
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
export default Navigation;
