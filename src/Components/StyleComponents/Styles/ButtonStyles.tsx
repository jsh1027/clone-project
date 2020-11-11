import Styled from 'styled-components/native';
import CommonValue from '~/Components/StyleComponents/CommonValue';

const BottomBtn_com = Styled.TouchableOpacity`
    position: absolute;
    width: 100%;
    height: 10%;
    justify-content: center;
    align-items: center;
    bottom: 0px;
    background-color: ${CommonValue.c_brand};
`;

export default {
    BottomBtn_com
};
