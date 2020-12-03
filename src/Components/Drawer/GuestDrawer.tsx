import React from 'react';
import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import commonValue from '~/Components/Common/commonValue';
import { TitleText } from '~/Components/Common/TextStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image } from 'react-native';

type NavigationProp = StackNavigationProp<StackNaviParamList>;
interface Props {
    navigation: NavigationProp;
};

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

const GuestBox = Styled.TouchableOpacity`
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 0px;
    margin: 10px 0px;
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

const MenuText = Styled.Text`
    font-size: 17px;
    color: ${commonValue.c_menu};
    font-weight: bold;
`;

const IconBox = Styled.TouchableOpacity`
    align-self: flex-end;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-left: 10px;
`;

const DrawerIcon = Styled(Icon)`
    color: ${commonValue.c_supplement};
    font-size: 27px;
`;

const AdBox = Styled.TouchableOpacity`
    width: 300px;
    height: 110px;
    background-color: #258CCC;
    margin: 10px 0px;
    overflow: hidden;
`


const UserDrawer = ({ navigation }: Props) => {

    return(
        <Container>
            <TopBox>
                <IconBox>
                    <DrawerIcon name='settings-outline' />
                </IconBox>
            </TopBox>

            <GuestBox onPress={()=> navigation.navigate('Intro')}>
                <TextBox>
                    <TitleText>
                        로그인이 필요해요
                    </TitleText>
                    <DrawerIcon name='md-chevron-forward-sharp' />
                </TextBox>
            </GuestBox>

            <AdBox>
                <Image
                    style={{width:300, height:120, marginLeft: 20,resizeMode: 'contain'}}
                    source={require('~/Assets/Images/Images/banner.png')}
                />                
            </AdBox>

            <ListBox>
                <ItemBox>
                    <MenuText>이벤트 제휴혜택</ MenuText>
                </ItemBox>

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