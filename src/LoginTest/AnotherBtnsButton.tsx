import React from 'react';
import { Dimensions } from 'react-native';
import Styled from 'styled-components/native';
import { SupplementText } from '~/Components/Common/TextStyles';


const fullHeight = Dimensions.get('window').height - 50;

const Button = Styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;


const AnotherBtnsButton = ( { setIsDefault, setYValue } ) => {
    return(
        <Button
        onPress={()=>{setIsDefault(false); setYValue({toValue: 400, fromValue: 800});}}
        >
            <SupplementText style={{textDecorationLine: 'underline'}}>
                다른 방법으로 로그인
            </SupplementText>
        </Button>
    );
};


export default AnotherBtnsButton;