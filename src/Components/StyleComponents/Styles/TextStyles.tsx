import Styled from 'styled-components/native';
import CommonValue from '~/Components/StyleComponents/CommonValue';

const TitleText_com = Styled.Text`
    width: 100%;
    margin-top: 10%;
    font-size: 25px;
    font-weight: 700;
    color: ${CommonValue.c_title};

    /* border: 1px solid green; */
`;

const ListTitle_com = Styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: ${CommonValue.c_title};
    margin: 0 2% 0 0;
`;

const ListSubTitle_com = Styled.Text`
    font-size: 15px;
    font-weight: 700;
    color: ${CommonValue.c_supplement};    
    margin: 0 3% 0 0;
`;

const ListContent_com = Styled.Text`
    font-size: 17px;
    color: ${CommonValue.c_content};       
`;

const Announcement_com = Styled.Text`    
    font-size: 13px;
    color: ${CommonValue.c_supplement};       
    margin-bottom: 3%;
`;

const BtnText_com = Styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
`;

export default {
    TitleText_com,
    ListTitle_com,
    ListSubTitle_com,
    ListContent_com,
    Announcement_com,
    BtnText_com
};