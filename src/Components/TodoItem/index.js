import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';

const TodoItem = ({ id, name, category, setTaskCompleted, isCompleted }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(isCompleted);
  function onChange(newValue) {
    setToggleCheckBox(newValue);
    setTaskCompleted(newValue, id);
  }
  return (
    <View style={styles.container}>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={onChange}
        // setTaskCompleted={setTaskCompleted}
        // isCompleted={isCompleted}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text>{category}</Text>
      </View>
    </View>
  );
};

export default TodoItem;
