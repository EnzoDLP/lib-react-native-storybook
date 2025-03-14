import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import ProgressBar from '../ProgressBar/ProgressBar.component';

interface MySecondButtonProps {
  onPress: () => void;
  text: string;
}

export const MySecondButton = ({ onPress, text }: MySecondButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      <ProgressBar progress={0.1} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: 'purple',
    alignSelf: 'flex-start',
    borderRadius: 8,
  },
  text: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default MySecondButton;
