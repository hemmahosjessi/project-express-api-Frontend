import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { API_URL_ALL } from 'utils/urls';


const TrackList = styled.div`
background-color: ##1a1a1a;
`

const TrackTitle = styled.h4`
color: #1a1a1a;
font-size: 24px;
margin: 0;
font-family: museomoderno;
`

const ArtistTitle = styled.h4`
color: #1a1a1a;
font-size: 16px;
margin: 0;
font-family: museomoderno;
`

const TrackItem = styled.h4`
color: ##1a1a1a;
`

export const All = () => {
    const [tracks, setTracks] = useState([])
    // const [loading, setLoading] = useState(false)

    
    useEffect(() => {
        fetch(API_URL_ALL)
        .then((res) => res.json())
        .then((json) => setTracks(json))
    }, [])

    console.log(tracks)


    return (
        <>
            {tracks.map((track) => (
                <TrackList>
                    <TrackItem>
                        <TrackTitle>{track.trackName}</TrackTitle>
                        <ArtistTitle>{track.artistName}</ArtistTitle>
                    </TrackItem>
                </TrackList>
            ))}
        </>
    )
}

