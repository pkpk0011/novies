import React from "react";
import HorizontalSlider from "../../components/HorizontalSlider";
import ScrollContainer from "../../components/ScrollContainer";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import styled from "styled-components/native";
import List from "../../components/List";
import Swiper from 'react-native-web-swiper';
import { Dimensions } from "react-native";
import Slide from "../../components/Movies/Slide";

const Container = styled.View`
    margin-top: 30px;
`;

const { width:WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
    width: 100%;
    height: ${HEIGHT / 4}px;
    margin-bottom: 50px;
`;

export default ({ refreshFn, loading, popular, topRated, today, thisWeek }) => (
    <ScrollContainer refreshFn={refreshFn} loading={loading}>
        <Container>
            <HorizontalSlider title="Popular Shows">
                {popular.map(show => 
                <Vertical
                    isTv={true}
                    key={show.id} 
                    id={show.id} 
                    title={show.name}
                    overview={show.overview}
                    votes={show.vote_average}
                    backgroundImage={show.backdrop_path}
                    poster={show.poster_path}
                />)}
            </HorizontalSlider>
            <HorizontalSlider title="Top Rated">
                {topRated.map(show => 
                <Vertical
                    isTv={true}
                    key={show.id} 
                    id={show.id} 
                    title={show.name}
                    overview={show.overview}
                    votes={show.vote_average}
                    backgroundImage={show.backdrop_path}
                    poster={show.poster_path}
                />)}
            </HorizontalSlider>
            <SliderContainer>
            <Swiper controlsEnabled={false} loop timeout={3}>
                {thisWeek.map(show => (
                <Slide 
                key={show.id} 
                id={show.id} 
                title={show.name}
                overview={show.overview}
                votes={show.vote_average}
                backgroundImage={show.backdrop_path}
                poster={show.poster_path}
                />
                ))}
            </Swiper>
        </SliderContainer>
            <List title="Airing Today">
                {today.map(show => (
                    <Horizontal 
                        isTv={true}
                        key={show.id} 
                        id={show.id} 
                        title={show.name}
                        overview={show.overview}
                        votes={show.vote_average}
                        backgroundImage={show.backdrop_path}
                        poster={show.poster_path}
                     />
                ))}
            </List>
        </Container>
    </ScrollContainer>
);