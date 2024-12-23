import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/taskItemStyles';

const TaskItem = ({ task, toggleTaskCompletion }) => {

  return (
    <View style={styles.taskContainer}>
        <Text
          style={[styles.taskText, task.completed && styles.taskCompleted]}
        >
          {task.text}
        </Text>
      <TouchableOpacity onPress={() => toggleTaskCompletion(task.id)}>
        <Text 
          style={[
            styles.completeButton,
            { color: task.completed ? styles.completeButton.colorCompleted : styles.completeButton.colorDefault },
         ]}
        >
          {task.completed ? 'Reopen' : 'Complete'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;
