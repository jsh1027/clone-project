import React from 'react';
import Styled from 'styled-components/native';
import { TitleText, ContentText, SupplementText, ContentTitleText } from '~/Components/Common/TextStyles';
import commonValue from '~/Components/Common/commonValue';
import Icon from 'react-native-vector-icons/Ionicons';

const ItemContainer = Styled.View`
    flex: 1;
    flex-direction: row;
    align-items: flex-start;
    margin: 10px 0 10px 0;
`;

const IconBox = Styled.View`
    flex: 1;
    margin-right: 5px;
`;

const TextBox = Styled.View`
    flex: 9;    
    justify-content: flex-start;
    align-items: flex-start;
`;

const TitleBox = Styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

interface Props {
    item: {
        "iconName": string,
        "title": string,
        "sup": string,
        "content": string
    };
};

const PermissionList = ( { item }: Props ) =>{
    return (
        <ItemContainer>
            <IconBox>
                <Icon name={item.iconName} size={35} color={commonValue.c_brand} />
            </IconBox>
            <TextBox>
                <TitleBox>
                    <ContentTitleText> {item.title} </ContentTitleText>
                    <SupplementText> {item.sup} </SupplementText>
                </TitleBox>
                <ContentText> {item.content} </ContentText>
            </TextBox>
        </ItemContainer>
    );
};

export default PermissionList;