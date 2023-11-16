import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useGetCartQuery} from '../../redux/api/cartApi';
import {Button, CartListItem} from '@components';

const Cart = () => {
  const {data, isLoading, refetch, isFetching} = useGetCartQuery(null);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <FlatList
      data={data?.data.detail}
      renderItem={({item}) => <CartListItem item={item} />}
      keyExtractor={item => item.id.toString()}
      refreshing={isFetching}
      onRefresh={() => refetch()}
      ListFooterComponent={
        <View>
          <Text>Total: {data?.data.basket.totalPrice} TL</Text>
          <Button text={'Done'} onPress={() => null} />
        </View>
      }
    />
  );
};

export default Cart;
