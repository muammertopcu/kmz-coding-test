import React, {ReactElement} from 'react';
import Swiper from 'react-native-swiper';
import {Image} from 'react-native';
import styles from './Slider.styles';

const Slider = (): ReactElement => {
  return (
    <Swiper autoplay autoplayTimeout={3} style={styles.slider}>
      <Image
        source={{uri: 'https://via.placeholder.com/200x300'}}
        style={styles.sliderImage}
      />
      <Image
        source={{uri: 'https://via.placeholder.com/200x300'}}
        style={styles.sliderImage}
      />
      <Image
        source={{uri: 'https://via.placeholder.com/200x300'}}
        style={styles.sliderImage}
      />
    </Swiper>
  );
};

export default Slider;
