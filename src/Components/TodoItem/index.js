import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const TodoItem = ({ name, category }) => {
   return (
      <View style={styles.container}>
         <Text style={styles.nameText}>{name}</Text>
         <Text>{category}</Text>
      </View>
   );
};

export default TodoItem;
