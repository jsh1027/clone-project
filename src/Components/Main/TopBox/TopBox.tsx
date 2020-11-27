import React from 'react';
import Styled from 'styled-components/native'
import TabButton from '~/Components/Main/TopBox/TabButton';
import BannerButton from '~/Components/Main/TopBox/BannerButton';

const Container = Styled.View`
    width: 100%;
    height: 10%;
    flex-direction: row;
    align-items: center;
    padding: 0px 10px;
`;


const TopBox = () => {

    return(
        <Container>
            <TabButton />
            <BannerButton />
        </Container>
    );

};

export default TopBox;