import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Card } from '../components/Card'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Home = ({type}) => {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await axios.get(`/videos/${type}`);
      setVideos(res.data)
    }
    fetchVideo()
  },[type])
  
  return (
    <Container>
      {videos.map((video, index) => (
        <Card key={index} video={video}/>
      ))}
    </Container>
  )
}
