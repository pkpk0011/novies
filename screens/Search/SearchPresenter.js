import React from 'react';
import HorizontalSlider from '../../components/HorizontalSlider';
import ScrollContainer from '../../components/ScrollContainer';
import Input from '../../components/Search/Input';
import Vertical from '../../components/Vertical';

export default ({ movies, shows, keyword, onChange, onSubmit }) => (
    <ScrollContainer 
        refreshFn={onSubmit}
        loading={false}
        contentContainerStyle={{
        paddingTop: 10
    }}>
        <Input 
        placeholder={"Write a keyword"} 
        value={keyword} 
        onChange={onChange} 
        onSubmit={onSubmit} 
        />
        {movies.length !== 0 && (
        <HorizontalSlider title={"Movie Results"}>
            {movies.map(movie => (
            <Vertical
            key={movie.id}
            id={movie.id} 
            votes={movie.vote_average}
            title={movie.title} 
            poster={movie.poster_path}
            />
            ))}
        </HorizontalSlider>)}
        {shows.length !==0 && (
        <HorizontalSlider title={"TV Results"}>
            {shows.map(show => (
            <Vertical
             isTv={true}
             key={show.id}
             id={show.id}
             votes={show.vote_average}
             title={show.name}
             poster={show.poster_path}
             />
            ))}
        </HorizontalSlider>
        )}
    </ScrollContainer>
);