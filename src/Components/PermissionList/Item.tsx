import React from 'react';
import { 
        PermissionListStyles as PlistSt,
        TextStyles as Tst
    } 
    from '~/Components/StyleComponents';

interface Props {
    item: {
        "iconName": string,
        "iconSize": number,
        "listTitle": string,
        "subTitle": string,
        "content": string
    };
}

// Icon
const IconBox = PlistSt.IconBox_com;
const Icon = PlistSt.ItemIcon_com;

// Text
const ListContent = Tst.ListContent_com;
const ListTitle = Tst.ListTitle_com;
const ListSubTitle = Tst.ListSubTitle_com;

const PermissionItem = ( { item }: Props ) => {
    const ItemContainer = PlistSt.ItemContainer_com;
    const TextBox = PlistSt.TextBox_com;
    const TitleBox = PlistSt.TitleBox_com;

    return (
        <ItemContainer>
            <IconBox>
                <Icon name={item.iconName} size={item.iconSize}/>
            </IconBox>
            <TextBox>
                <TitleBox>
                    <ListTitle>{item.listTitle}</ListTitle>
                    <ListSubTitle>{item.subTitle}</ListSubTitle>
                </TitleBox>
                <ListContent>{item.content}</ListContent>
            </TextBox>
        </ItemContainer>
    );
};

export { PermissionItem as Item };