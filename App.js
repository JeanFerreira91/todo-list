import React, { useState, useEffect, useCallback } from 'react';
import { View, StatusBar, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import styled from 'styled-components/native';
import AddInput from './Components/AddInput';
import TodoList from './Components/TodoList';
import Header from './Components/Header';
import Empty from './Components/Empty';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [data, setData] = useState([]);
  const [fontsLoaded] = useFonts({
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      setTimeout(SplashScreen.hideAsync, 3000);
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded) {
    return null;
  };

  // Method that adds each item to the list and is passed into onPress
  const submitHandler = (value) => {
    setData((prevTodo) => {
      return [
        {
          value: value,
          key: Math.random().toString(),
        },
        ...prevTodo,
      ];
    });
  };

  // Method to delete items from the list
  const deleteItem = (key) => {
    setData((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };

  return (
    <ComponentContainer
      onLayout={onLayoutRootView}
    >
      <View>
        <StatusBar
          barStyle='light-content'
          backgroundColor='midnightblue'
        />
      </View>
      <FlatList
        data={data}
        ListHeaderComponent={() => <Header />}
        ListEmptyComponent={() => <Empty />}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TodoList
            item={item}
            deleteItem={deleteItem}
          />
        )}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <View>
          <AddInput submitHandler={submitHandler} />
        </View>
      </KeyboardAvoidingView>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  background-color: midnightblue;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;