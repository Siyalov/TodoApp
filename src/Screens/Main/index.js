import React, { useState } from 'react';
import { View } from 'react-native';
import CircleButton from '../../Components/CircleButton';
import TodoBlock from '../../Components/TodoBlock';
import styles from './styles';

const intialTodoData = [
  {
    id: '1',
    isCompleted: false,
    name: 'Задача 1',
    category: 'Финансы_1',
  },
  {
    id: '2',
    isCompleted: true,
    name: 'Задача 2',
    category: 'Финансы_2',
  },
  {
    id: '3',
    isCompleted: false,
    name: 'Задача 3',
    category: 'Финансы_3',
  },
  {
    id: '4',
    isCompleted: true,
    name: 'Задача 4',
    category: 'Финансы_4',
  },
  {
    id: '5',
    isCompleted: false,
    name: 'Задача 5',
    category: 'Финансы_5',
  },
];

const intialTask = {
  id: null,
  name: 'Новая задача',
  category: null,
  isCompleted: false,
};

const generateId = () => Math.floor(Math.random() * 1000);

const Main = () => {
  const [todoData, setTodoData] = useState(intialTodoData);

  const addNewTask = () => {
    setTodoData([
      ...todoData,
      {
        ...intialTask,
        id: generateId().toString(),
      },
    ]);
    //  console.log('task', task);
  };

  const filterTodoData = ({ data, status }) =>
    data.filter(item => item.isCompleted === status);

  const setTaskCompleted = ({ isChacked, id }) => {
    const newTodoData = todoData.map(item => {
      if (item.id === id) {
        return {
          ...item,
          isCompleted: isChacked,
        };
      } else {
        return item;
      }
    });
    setTodoData(newTodoData);
  };

  return (
    <View style={styles.container}>
      <TodoBlock
        todoData={filterTodoData({ data: todoData, status: false })}
        title={'Новые!'}
        setTaskCompleted={setTaskCompleted}
      />
      <TodoBlock
        todoData={filterTodoData({ data: todoData, status: true })}
        title={'Выполненные!'}
        setTaskCompleted={setTaskCompleted}
      />
      <CircleButton add={addNewTask} />
    </View>
  );
};

export default Main;
