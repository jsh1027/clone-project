import React, { useContext } from 'react';
import { Dimensions, Image } from 'react-native';
import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import commonValue from '~/Components/Common/commonValue';
import { TitleText, ContentTitleText, SupplementText } from '~/Components/Common/TextStyles';
import { UserContext } from '~/Context/User';

const windowW = Dimensions.get('window').width;

const Container = Styled.View`
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
`;

const TopBox = Styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

const UserBox = Styled.TouchableOpacity`
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    margin: 20px 0px;
`;

const TextBox = Styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const ListBox = Styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const ItemBox = Styled.TouchableOpacity`
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 5px;
`;

const UnderItemBox = Styled.View`
    width: 100%;
    justify-content: center;
    align-items: flex-start;
`;

const MenuText = Styled.Text`
    font-size: 17px;
    color: ${commonValue.c_menu};
    font-weight: bold;
`;

const UnderMenuText = Styled.Text`
    font-size: 15px;
    color: ${commonValue.c_menu};
    margin: 10px 0px 10px 20px;
`;

const IconBox = Styled.TouchableOpacity`
    align-self: flex-end;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

const DrawerIcon = Styled(Icon)`
    color: ${commonValue.c_supplement};
    font-size: 27px;
`;
const DrawerMIcon = Styled(MIcon)`
    color: ${commonValue.c_supplement};
    font-size: 28px;
`;

const AdBox = Styled.TouchableOpacity`
    width: 300px;
    height: 110px;
    background-color: #258CCC;
    margin: 10px 0px;
    overflow: hidden;
`


const UserDrawer = () => {
    const { userInfo } = useContext<IUserContext>(UserContext);

    return(
        <Container>
            <TopBox>
                <IconBox>
                    <DrawerMIcon name='alpha-p-circle' />
                </IconBox>
                <IconBox>
                    <DrawerIcon name='settings-outline' />
                </IconBox>
            </TopBox>

            <UserBox>
                <TextBox>
                    <TitleText style={{color: commonValue.c_brand}}>
                        {userInfo?.name} 
                        <ContentTitleText> 님</ContentTitleText>
                    </TitleText>
                    <DrawerIcon name='md-chevron-forward-sharp' />
                </TextBox>
                <SupplementText>
                    {userInfo?.email}
                </SupplementText>
            </UserBox>

            <AdBox>
                <Image
                    style={{width:300, height:120, marginLeft: 20,resizeMode: 'contain'}}
                    source={require('~/Assets/Images/Images/banner.png')}
                />
            </AdBox>

            <ListBox>
                <ItemBox>
                    <MenuText>예약확인</MenuText>
                </ItemBox>
                <ItemBox>
                    <MenuText>반납하기</ MenuText>
                </ItemBox>
                <ItemBox>
                    <MenuText>스마트키</ MenuText>
                </ItemBox>
                
                <ItemBox>
                    <MenuText>이벤트 제휴혜택</ MenuText>
                </ItemBox>
                <UnderItemBox>
                    <UnderMenuText>쿠폰받기</UnderMenuText>
                    <UnderMenuText>무료편도</UnderMenuText>
                    <UnderMenuText>친구추천</UnderMenuText>
                </UnderItemBox>

                <ItemBox>
                    <MenuText>이용 상품 안내</ MenuText>
                </ItemBox>
                <ItemBox>
                    <MenuText>고객센터</ MenuText>
                </ItemBox>
            </ListBox>
        </Container>
    );
}

export default UserDrawer;