import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import { formatDate, trimText } from "../utils";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
    padding: 0px 30px;
    margin-bottom: 30px;
    flex-direction: row;
    align-items: flex-start;
`;

const Data = styled.View`
    align-items: flex-start;
    width: 60%;
    margin-left: 25px;
`;

const Title = styled.Text`
    color: white;
    font-weight: bold;
    margin-bottom: 10px;
`;

const ReleaseDate = styled.Text`
    color: white;
    font-size: 12px;
`;

const OverView = styled.Text`
    margin-top: 10px;
    color: white;
`;

const Horizontal = ({
    isTv = false,
    id, 
    title, 
    backgroundImage, 
    votes, 
    overview, 
    poster,
    releaseDate
}) => { 
    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Detail", {
            isTv,
            id, 
            title, 
            backgroundImage, 
            votes, 
            overview, 
            poster,
            releaseDate
        }
        )}
    return (
        <TouchableOpacity onPress={goToDetail}>
            <Container>
                <Poster url={poster} />
                <Data>
                    <Title>{trimText(title, 30)}</Title>
                    {releaseDate ? <ReleaseDate>{formatDate(releaseDate)}</ReleaseDate> : null}
                    <OverView>{trimText(overview, 130)}</OverView>
                </Data>
            </Container>
        </TouchableOpacity>
    );
};

Horizontal.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string,
    votes: PropTypes.number.isRequired,
    poster: PropTypes.string,
    overview: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
};

export default Horizontal;