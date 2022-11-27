import React from 'react';
import { View, Text } from 'react-native';
import TodoList from '../TodoList';

const TodoBlock = ({ todoData, title, setTaskComplited }) => {
  return (
    <View>
      <Text>{title}</Text>
      <TodoList todoData={todoData} setTaskComplited={setTaskComplited} />
    </View>
  );
};

export default TodoBlock;
