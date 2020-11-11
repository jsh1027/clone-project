import Styled from 'styled-components/native';
import CommonValue from '~/Components/StyleComponents/CommonValue';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ListScreen_com = Styled.View`
    flex: 1;
    width: 100%;
    height: 100%;

    padding: 5% 10% 5% 10%;

    justify-content: flex-start;
    align-items: flex-start;
    /* border: 1px solid ${CommonValue.c_title}; */
`;

const FlatListContainer_com = Styled.View`
    width: 100%;
    margin: 10% 0 10% 0;

    /* border: 2px solid red;     */
`;

const AnnouncementContainer_com = Styled.View`
    flex: 1;
    /* border: 2px solid red;     */
`;


//List Item Styles
const ItemContainer_com = Styled.View`
    flex-direction: row;
    margin: 3% 0 3% 0;

    /* border: 2px solid blue; */
`;

const TextBox_com = Styled.View`
    flex-direction: column;

    /* border: 2px solid red; */
`;

const TitleBox_com = Styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 0 0 5px 0; 
`;   

const IconBox_com = Styled.View`
    width: 25px;    
    height: 30px;
    margin: 3px 5px 0 0;
    align-items: center;
`;

const ItemIcon_com = Styled(FontAwesome)`
    color: ${CommonValue.c_brand};
`;


export default { 
    ListScreen_com, 
    FlatListContainer_com, 
    AnnouncementContainer_com,
    ItemContainer_com,
    TextBox_com,
    TitleBox_com,
    IconBox_com,
    ItemIcon_com
};