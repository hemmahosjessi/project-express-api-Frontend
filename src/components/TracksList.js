import React, { useEffect, useState } from "react"
import { API_URL_ALL } from 'utils/urls'
import { LottieLoader } from "./LottieLoader"
import { 
    TrackTitle,
    ArtistTitle,
    Genre,
    LoaderContainer,
    LoadingText,
    TrackList,
    TrackItem,
    BottomContainer,
    P,
    P2,
    TopContainer,
    Score
} from 'utils/styles'


export const TracksList = () => {
    const [tracks, setTracks] = useState([])
    const [loading, setLoading] = useState(false)

    
    useEffect(() => {
        setLoading(true)
        fetch(API_URL_ALL)
        .then((res) => res.json())
        .then((json) => 
            setTracks(json))
            setLoading(false)
    }, [])

    console.log(tracks)


    return (
        <>
            {loading && (
                <LoaderContainer>
                    <LottieLoader />
                    <LoadingText>LOADING...</LoadingText>
                </LoaderContainer>
            )}

            <TrackList>
                {tracks.map((track) => (
                    <TrackItem key={track.id}>
                        <TopContainer>
                            <TrackTitle>{track.trackName}</TrackTitle>
                            <ArtistTitle>{track.artistName}</ArtistTitle>
                        </TopContainer>
                        <BottomContainer>
                            <Genre>{track.genre}</Genre>
                            <Score>
                                <P2>Score</P2>
                                <P>{track.popularity}</P>
                            </Score>
                        </BottomContainer>
                    </TrackItem>
                ))}
            </TrackList>
        </>
    )
}

