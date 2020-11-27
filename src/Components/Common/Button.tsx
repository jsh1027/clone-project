import Styled from 'styled-components/native';
import commonValue from '~/Components/Common/commonValue';
import { normalize } from '~/Components/Common/TextStyles';

const BottomBtn = Styled.TouchableOpacity`
    position: absolute;
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
    bottom: 0px;
    background-color: ${commonValue.c_brand};
`;

const RoundBtn = Styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: center;
    background-color: ${commonValue.c_brand};
    border-radius: 30px;
`;

const TextBtn = Styled.TouchableOpacity`
    width: 100%;
    justify-content: center;
    align-items: center;
`;


export {
    BottomBtn,
    RoundBtn,
    TextBtn,    
};