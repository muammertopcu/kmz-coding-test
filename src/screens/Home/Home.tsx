import React, {ReactElement} from 'react';
import {FlatList, Text} from 'react-native';
import {useGetCategoriesQuery} from '../../redux/api/categoryApi';
import {CategoryItem, Slider} from '@components';

const Home = (): ReactElement => {
  const {data, refetch, isFetching, isLoading} = useGetCategoriesQuery();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <FlatList
      data={data?.data.categories}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <CategoryItem category={item} onPress={() => {}} withImage />
      )}
      onRefresh={refetch}
      refreshing={isFetching}
      numColumns={4}
      ListHeaderComponent={<Slider />}
    />
  );
};

export default Home;
