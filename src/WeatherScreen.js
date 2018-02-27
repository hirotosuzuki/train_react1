// @flow
import React, {Component} from 'react';
import  {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import CurrentWeather from './CurrentWeather';
import {getCurrentWeather} from './WeatherService';

// Stateのflow型を宣言
type State = {
  current: ?CurrentWeather,
};
// componentにはfunction_componentとclass_componentがあり、今回はclass
class WeatherScreen extends Component<{}> {
  // 内部に状態を持たせたいのでコンストラクタを呼ぶ
  constructor(props: {}){
    // 親クラスのコンストラクタを呼ぶ
    super(props);
    // stateの初期値を設定
    this.state =  { current: null };
  }
  
  // Componentクラスに用意されているLife Cycle Methodの一つ
  // コンポーネントのrenderが初めて実行された後に一度だけ呼ばれる
  // 通信やローカルデータの読み込み処理はこの中で行う
  componentDidMount(){
    getCurrentWeather('Tokyo')
      .then((current) => {
        console.log('天気予報取得完了！');
        this.setState({current});
      });
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
            source={{uri: iconURL}}
            style={styles.icon}
          />
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
