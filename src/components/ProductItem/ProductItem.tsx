import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {Product} from '@types';
import styles from './ProductItem.styles';

interface Props {
  product: Product;
  onPress?: () => void;
}

const ProductItem = ({product, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{uri: product.productImages[0].imagePath}}
        style={styles.image}
      />
      <Text>{product.stockName}</Text>
    </TouchableOpacity>
  );
};

export default ProductItem;
