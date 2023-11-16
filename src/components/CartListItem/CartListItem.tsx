import React, {Fragment, ReactElement} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './CartListItem.styles';
import type {CartItem} from '@types';

interface Props {
  item: CartItem;
}

const CartListItem = ({item}: Props): ReactElement => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.productImage}} style={styles.image} />

      <Fragment>
        <View style={styles.info}>
          <View style={styles.infoRow}>
            <Text style={styles.infoRowText}>{item.stockName}</Text>
            <Text style={styles.infoRowText}>
              {item.totalPrice} {item.currency}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoRowText}>
              {item.qty} {item.saleUnit}
            </Text>
          </View>
        </View>
      </Fragment>
    </View>
  );
};

export default CartListItem;
