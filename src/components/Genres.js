import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from 'react-router-dom'
import { API_URL_ALL } from 'utils/urls'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css'
import { 
    SelectContainer,
    ListByGenre,
    Genre,
    GenreItem,
    TrackTitle,
    ArtistTitle,
} from 'utils/styles'


const GenreOptions = [
    { label: "Pop" },
    { label: "Edm" },
    { label: "Brostep" },
    { label: "Latin" },
    { label: "R&B en Espanol" },
    { label: "Dance Pop" },
    { label: "Edm" },
    { label: "Boy Band" },
    { label: "Panamanian Pop" },
  ];


export const Genres = () => {
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        fetch(API_URL_ALL)
        .then((res) => res.json())
        .then((json) => 
            setTracks(json))
    }, [])

    return (
    
        <>
            <SelectContainer>
                <Select options={GenreOptions} />
            </SelectContainer>

            <ListByGenre>
            {tracks.map((track) => (
                <GenreItem key={track.id}>
                    <TrackTitle>{track.trackName}</TrackTitle>
                    <ArtistTitle>{track.artistName}</ArtistTitle>
                    <Genre>{track.genre}</Genre>
                </GenreItem>
            ))}
            </ListByGenre>
        </>

    )
}
