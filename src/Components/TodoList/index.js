import React from 'react';
import { View, FlatList } from 'react-native';
import TodoItem from '../TodoItem';

const TodoList = ({ todoData }) => {
  const renderItem = ({ item }) => (
    <TodoItem name={item.name} category={item.category} />
  );

  return (
    <View>
      {/* {TodoData.map(e => <renderItem item={e} />)} */}
      <FlatList
        data={todoData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TodoList;
