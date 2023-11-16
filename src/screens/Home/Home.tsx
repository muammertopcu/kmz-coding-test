import React, {Fragment, ReactElement} from 'react';
import {FlatList, Text} from 'react-native';
import {useGetCategoriesQuery} from '../../redux/api/categoryApi';
import {CategoryItem, CategoryLeftMenu, Slider} from '@components';

const Home = (): ReactElement => {
  const {data, refetch, isFetching, isLoading} = useGetCategoriesQuery();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Fragment>
      <FlatList
        data={data?.data.categories}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <CategoryItem category={item} onPress={() => {}} withImage centered />
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
