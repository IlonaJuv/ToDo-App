import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/homeScreenStyles';
import TaskList from '../components/TaskList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <TaskList />
    </View>
  );
};

export default HomeScreen;

