import React from 'react';
import {Image, Text, View} from 'react-native';
import {Product} from '@types';
import styles from './ProductItem.styles';

interface Props {
  product: Product;
}

const ProductItem = ({product}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: product.productImages[0].imagePath}}
        style={styles.image}
      />
      <Text>{product.stockName}</Text>
    </View>
  );
};

export default ProductItem;
