import Styled from 'styled-components/native';

const ListContainer = Styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 10%;
    justify-content: center;
    align-items: flex-start;
    border: 1px solid green;
`;

const TitleText = Styled.Text`
    flex: 1;
    width: 100%;
    margin-top: 20%;
    font-size: 25px;
    font-weight: 700;
    color: black;
    border: 1px solid green;
`;

const ListIcon = Styled.Image`
    width: 20px;
    height: 20px;
    margin: 0 1% 0 0;
`;

const ListTitle = Styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: black;
    margin: 0 2% 0 0;
`;

const ListSubTitle = Styled.Text`
    font-size: 15px;
    font-weight: 700;
    color: #bebebe;    
    margin: 0 3% 0 0;
`;

const ListContent = Styled.Text`
    font-size: 17px;
    font-weight: 700;
    color: #8a8a8a;    
`;

const FlatListContainer = Styled.View`
    flex: 3;
    border: 2px solid red;
    width: 100%;
`;

const Announcement = Styled.Text`    
    font-size: 13px;
    color: #bebebe;    
    margin-bottom: 3%;
`;

const AnnouncementContainer = Styled.View`
    flex:2;
`;

export { ListContainer, TitleText, ListTitle, ListSubTitle, ListContent, ListIcon, FlatListContainer, Announcement, AnnouncementContainer };