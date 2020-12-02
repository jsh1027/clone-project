import React from 'react';
import Styled from 'styled-components/native';
import commonValue from '~/Components/Common/commonValue';

const Container = Styled.View`
    width: 100%;
    height: 350px;

    background-color: lightgrey;
`;

const RowBox = Styled.View`
    width: 100%;
    height: 80px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    border: 1px solid lightblue;
`;

const TextInput = Styled.TextInput`
    flex: 4;
    height: 60px;
    border: 1px solid green;
`;

const SelectInput = Styled.View`
    flex: 3;
    height: 60px;
    border: 1px solid green;
    margin-right: 5px;
`;

const UserInfoInput = () => {

    return(
        <Container>
            <RowBox>
                <SelectInput>

                </SelectInput>
                <TextInput></TextInput>
            </RowBox>
            <RowBox>
                <TextInput></TextInput>
                <TextInput></TextInput>
            </RowBox>
            <RowBox>
                <SelectInput></SelectInput>
                <TextInput></TextInput>
            </RowBox>
        </Container>
    );
};

export default UserInfoInput;