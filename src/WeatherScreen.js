// @flow
import React, {Component} from 'react';
import  {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from 'react-native';
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';
import ForecastListItem from './ForecastListItem';
import {
  getCurrentWeather,
  getWeatherForecast,
} from './WeatherService';

// Stateのflow型を宣言
type State = {
  current: ?CurrentWeather,
  forecasts: WeatherForecast[],
};
// componentにはfunction_componentとclass_componentがあり、今回はclass
class WeatherScreen extends Component<{}> {
  // 内部に状態を持たせたいのでコンストラクタを呼ぶ
  constructor(props: {}){
    // 親クラスのコンストラクタを呼ぶ
    super(props);
    // stateの初期値を設定
    this.state =  { current: null, forecasts: [] };
  }

  // Componentクラスに用意されているLife Cycle Methodの一つ
  // コンポーネントのrenderが初めて実行された後に一度だけ呼ばれる
  // 通信やローカルデータの読み込み処理はこの中で行う
  componentDidMount(){
    const tokyo = 'Tokyo';
    getCurrentWeather(tokyo)
      .then(current =>
        this.setState({current}));
    getWeatherForecast(tokyo)
      .then(forecasts =>
        this.setState({forecasts}));
  }

  renderForecasts() {
    return (
      <FlatList
        data={this.state.forecasts}
        renderItem={({ item }) =>
          <ForecastListItem item={item} />}
        keyExtractor={item => item.date.toString()}
      />
    );
  }

  render(){
      const { current } = this.state;
      if (current==null){
        return (
          <View style={styles.container}>
            <ActivityIndicator />
          </View>
        );
      }
      const {main, iconURL} = current;
      return (
        <View style={styles.container}>
          <Text style={styles.text}>
            {main}
          </Text>
          <Image
            source={{ uri: iconURL }}
            style={styles.icon}
          />
          {this.renderForecasts()}
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginVertical: 8,
  },
  icon: {
    width: 100,
    height: 100,
  },
});

export default WeatherScreen;
