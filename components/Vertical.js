import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import Poster from "./Poster";
import { useNavigation } from "@react-navigation/native";
import Votes from "./Votes";
import { trimText } from "../utils";

const Container = styled.View`
    align-items: center;
    margin-right: 20px;
`;

const Title = styled.Text`
    color: white;
    font-weight: 500;
    margin: 10px 0px 5px 0px;
`;

const Vertical = ({ isTv=false, id, title, backgroundImage, votes, overview, poster }) => {
    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Detail", {
            isTv,
            id, 
            title, 
            backgroundImage, 
            votes, 
            overview, 
            poster
        })
    }
    return (
        <TouchableOpacity onPress={goToDetail}>
            <Container>
                <Poster url={poster} />
                <Title>{trimText(title, 10)}</Title>
                {votes > 0 && <Votes votes={votes} />}
            </Container>
        </TouchableOpacity>
    )
}

Vertical.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string,
    votes: PropTypes.number.isRequired,
    poster: PropTypes.string,
    overview: PropTypes.string.isRequired
}

export default Vertical;