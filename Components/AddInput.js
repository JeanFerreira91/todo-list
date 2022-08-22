import React, { useState } from 'react';
import { Keyboard, Text } from 'react-native';
import styled from 'styled-components/native';

export default function AddInput({ submitHandler }) {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
    }

    const onChangeText = (text) => {
        setTask(text);
    };

    return (
        <ComponentContainer>
            <InputContainer>
                <Input placeholder='Add Task...' value={task} onChangeText={text => setTask(text)} />
            </InputContainer>
            <SubmitButton
                onPress={() => {
                    handleAddTask()
                    submitHandler(task)
                }}
            >
                <Text>
                    +
                </Text>
            </SubmitButton>
        </ComponentContainer>
    );
}

// Styling the AddInput component
const ComponentContainer = styled.View`
flex-direction: row;
paddingBottom: 30px;
`;

const InputContainer = styled.View`
flex-direction: row;
border-radius: 10px;
`;

const Input = styled.TextInput`
font-size: 20px;
background-color: white;
width: 300px;
margin-right: 20px;
padding: 10px;
margin-bottom: 20px;
border-radius: 10px;
`;

const SubmitButton = styled.TouchableOpacity`
width: 50px;
justify-content: center;
align-items: center;
background-color: whitesmoke;
margin-bottom: 20px;
border-radius: 10px;
`;