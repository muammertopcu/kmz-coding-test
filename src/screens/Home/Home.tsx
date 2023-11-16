import React, {Fragment, ReactElement} from 'react';
import {FlatList, Text} from 'react-native';
import {useGetCategoriesQuery} from '../../redux/api/categoryApi';
import {CategoryItem, CategoryLeftMenu, Slider} from '@components';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Props {
  navigation: NativeStackNavigationProp<any>;
}

const Home = ({navigation}: Props): ReactElement => {
  const {data, refetch, isFetching, isLoading} = useGetCategoriesQuery();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  const pressHandler = (id: number) =>
    navigation.navigate('Products', {id, categories: data?.data.categories});

  return (
    <Fragment>
      <FlatList
        data={data?.data.categories}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <CategoryItem
            category={item}
            onPress={() => pressHandler(item.id)}
            withImage
            centered
          />
        )}
        onRefresh={refetch}
        refreshing={isFetching}
        numColumns={4}
        ListHeaderComponent={<Slider />}
      />

      <CategoryLeftMenu categories={data?.data.categories} />
    </Fragment>
  );
};

export default Home;
