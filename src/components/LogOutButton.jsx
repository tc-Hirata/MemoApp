import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

export default function LogOutButton() {
  const navigation = useNavigation();

  function handlePress() {
    firebase.auth().signOut()
      .then(() => {
        // 全ての履歴を削除
        navigation.reset({
          index: 0,
          routes: [{ name: 'LogIn' }],
        });
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        Alert.alert('ログアウトに失敗しました');
      });
  }
  return (
    <TouchableOpacity
      // eslint-disable-next-line react/jsx-no-bind
      onPress={handlePress}
      style={styles.container}
    >
      <Text style={styles.label}>ログアウト</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
