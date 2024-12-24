import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Text } from 'react-native';
import TaskItem from './TaskItem';
import FilterButton from './FilterButton';
import { styles } from '../styles/taskListStyles';
import { buttonStyles } from '../styles/buttonStyles';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [filter, setFilter] = useState('All');

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now().toString(), text: taskInput, completed: false },
      ]);
      setTaskInput('');
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          value={taskInput}
          onChangeText={(text) => setTaskInput(text)}
        />
        <TouchableOpacity  
          style={[
            buttonStyles.button, buttonStyles.buttonActive ]}
          onPress={addTask}>
          <Text style={buttonStyles.buttonText}>Add</Text>
        </TouchableOpacity>      
      </View>

      <View style={styles.filterContainer}>
        {['All', 'Active', 'Completed'].map((type) => (
          <FilterButton
            key={type}
            type={type}
            isActive={filter === type}
            onPress={() => setFilter(type)}
          />
        ))}
      </View>

      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        )}
      />
    </View>
  );
};

export default TaskList;
