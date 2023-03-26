import {FlatListProps} from 'react-native';
import {TForecastWeatherHourItem} from '../../../../store/modules';

export interface StyledFlatListProps
  extends FlatListProps<TForecastWeatherHourItem> {
  showsHorizontalScrollIndicator?: boolean;
}

export type TRenderHourItem = {
  item: TForecastWeatherHourItem;
};
