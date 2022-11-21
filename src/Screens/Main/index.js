import React from 'react';
import { View } from 'react-native';
import CircleButton from '../../Components/CircleButton';
import TodoList from '../../Components/TodoList';

const Main = () => {
   return (
      <View>
         <TodoList />
         <CircleButton />
      </View>
   );
};

export default Main;
