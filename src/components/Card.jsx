import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    width: ${(props) => props.type !== "sm" && "360px"};
    margin-bottom: ${(props) => props.type === "sm" ? "10px" : "45px"};
    cursor: pointer;
    display : ${(props) => props.type === "sm" && "flex"};
    gap: 10px;
`

const Image = styled.img`
    width: 100%;
    height: ${(props) => props.type === "sm" ? "120px" : "202px"};
    background-color:#999;
    flex:1 ;
`

const Details = styled.div`
    display: flex;
    margin-top: ${(props) => props.type !== "sm" && "16px"};
    gap: 12px;
    flex:1;
`

const ChannelImage = styled.img`
    width: 36px;
    height:36px;
    border-radius: 50px;
    background-color:#999;
    display: ${(props) => props.type === "sm" && "none"};
`

const Texts = styled.div`
    
`
const Title = styled.div`
    font-size:16px;
    font-weight:500;
    color: ${({theme}) => theme.text}
`
const ChannelName = styled.div`
    font-size:14px;
    color: ${({theme}) => theme.text};
    margin:9px 0px;
`
const Info = styled.div`
    font-size:14px;
    color: ${({theme}) => theme.textSoft};
`

export const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
    <Container type={type}>
        <Image type={type} src="https://cdn.sforum.vn/sforum/wp-content/uploads/2022/03/lam-chu-meta-cung-doi-hinh-syndra-reroll-cuc-ba-3-960x540.jpg"/>
        <Details type={type}>
            <ChannelImage type={type} src="https://yt3.ggpht.com/yti/AJo0G0n3ymlgfyzP45NSvW__iTfJ8eKuvnf657zUB1mCVQ=s88-c-k-c0x00ffffff-no-rj-mo"/>
            <Texts>
                <Title>Test Video</Title>
                <ChannelName>Hoang Phuc</ChannelName>
                <Info>660,908 views • 1 day ago</Info>
            </Texts>
        </Details>
    </Container>
    </Link>
  )
}
