import React from 'react';
import { View, Text } from 'react-native';
import TodoList from '../TodoList';

const TodoBlock = ({ todoData, title }) => {
  return (
    <View>
      <Text>{title}</Text>
      <TodoList todoData={todoData} />
    </View>
  );
};

export default TodoBlock;
