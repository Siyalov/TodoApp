import React from 'react';
import { View, FlatList } from 'react-native';
import TodoItem from '../TodoItem';

const TodoList = ({ todoData, setTaskCompleted }) => {
  const renderItem = ({ item, isCompleted }) => (
    <TodoItem
      id={item.id}
      name={item.name}
      category={item.category}
      setTaskCompleted={setTaskCompleted}
      isCompleted={isCompleted}
    />
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
