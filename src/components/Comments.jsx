import React from 'react'
import styled from 'styled-components'
import { Comment } from './Comment'

const Container = styled.div`

`

const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({theme}) => theme.soft};
    background-color: transparent;
    outline: none;
    width:100%;
`

export const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src="https://yt3.ggpht.com/yti/AJo0G0n3ymlgfyzP45NSvW__iTfJ8eKuvnf657zUB1mCVQ=s88-c-k-c0x00ffffff-no-rj-mo"/>
            <Input placeholder='Add a comment...'/>
        </NewComment>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </Container>
  )
}
