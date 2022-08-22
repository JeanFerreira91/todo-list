import React from 'react';
import styled from 'styled-components/native';

let today = new Date().toISOString().slice(0, 10);

export default function Header() {
    return (
        <ComponentContainer>
            <HeaderText>
                To-Do List
            </HeaderText>
            <HeaderList>
                {today}
            </HeaderList>
        </ComponentContainer>
    );
}

const ComponentContainer = styled.View`
    height: 100px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-top: 35px;
    margin-bottom: 20px;
`;

const HeaderText = styled.Text`
    color: white;
    font-family: poppins-bold;
    font-size: 30px;
`;

const HeaderList = styled.Text`
    color: white;
    font-family: poppins-bold;
    font-size: 15px;
    margin-right: 20px;
`;