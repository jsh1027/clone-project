import React from 'react';
import Styled from 'styled-components/native';
import { ListTitle, ListSubTitle, ListContent, ListIcon } from '~/Components/StyleComponents'

interface Props {
    item: {
        "url": string,
        "listTitle": string,
        "subTitle": string,
        "content": string
    };
}

const PermissionItem = ( { item }: Props ) => {
    const Container = Styled.View`
        margin: 3% 0 3% 0;
    `;
    const TitleBox = Styled.View`
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    `;    

    return (
        <Container>
            <TitleBox>
                <ListIcon source={require(`~/Assets/Icons/icon_marker.png`)} />
                <ListTitle>{item.listTitle}</ListTitle>
                <ListSubTitle>{item.subTitle}</ListSubTitle>
            </TitleBox>
            <ListContent>{item.content}</ListContent>
        </Container>
    );
};

export { PermissionItem as Item };