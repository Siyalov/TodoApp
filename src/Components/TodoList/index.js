import React from 'react';
import { View, Text, FlatList } from 'react-native';

const TodoData = [
  {
    id: '1',
    name: 'Задача 1',
    category: 'Финансы_1',
  },
  {
    id: '2',
    name: 'Задача 2',
    category: 'Финансы_2',
  },
  {
    id: '3',
    name: 'Задача 3',
    category: 'Финансы_3',
  },
  {
    id: '4',
    name: 'Задача 4',
    category: 'Финансы_4',
  },
  {
    id: '5',
    name: 'Задача 5',
    category: 'Финансы_5',
  },
];

const TodoList = () => {
  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.category}</Text>
      </View>
    );
  };
  return (
    <View>
      {/* {TodoData.map(e => <renderItem item={e} />)} */}
      <FlatList
        data={TodoData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TodoList;
