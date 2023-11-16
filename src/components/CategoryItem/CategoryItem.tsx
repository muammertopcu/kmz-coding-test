import React, {ReactElement} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import type {Category} from '@types';
import styles from './CategoryItem.styles';

interface ICategoryItemProps {
  category: Category;
  onPress: () => void;
  withImage?: boolean;
}

const CategoryItem = ({
  category,
  withImage,
  onPress,
}: ICategoryItemProps): ReactElement => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {withImage && (
        <Image
          source={{uri: 'https://via.placeholder.com/100'}}
          style={styles.image}
        />
      )}
      <Text numberOfLines={1} style={styles.text}>
        {category.categoryName}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
