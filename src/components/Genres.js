import React, { useState } from "react"
import { HeaderSmall } from "./HeaderSmall"
import { 
    Dropdown,
    Form,
    SubmitButton,
    P,
    P2,
    Genre,
    BottomContainer,
    ArtistTitle,
    Score,
    TopContainer,
    TrackTitle,
    TrackList,
    TrackItem,
} from 'utils/styles'
import { TracksList } from "./TracksList"




export const Genres = () => {
    const [selectInput, setSelectInput] = useState('')
    const [selectedGenres, setSelectedGenres] = useState([])

    const fetchSelectedGenre = (selectInput) => {
        fetch(`https://jes-50-popular-tracks-expr-api.herokuapp.com/tracks?genre=${selectInput}`)
          .then((res) => res.json())
          .then((json) => {
            setSelectedGenres(json.response)
            console.log("WHATS UP?", json)
          })
      }


    const onSetSelectInputChange = (event) => {
        setSelectInput(event.target.value)
      }
    
      const handleInputChange = (event) => {
        fetchSelectedGenre(selectInput)
        setSelectInput(selectInput)
        setSelectedGenres([])
        event.preventDefault()
      }


    return (
    
        <>
          <HeaderSmall />

            <Form onSubmit={handleInputChange}>
                <Dropdown
                    type="text"
                    value={selectInput}
                    onChange={onSetSelectInputChange}
                    >   
                    <option value=''>Select genre</option>
                    <option value='Edm'>Edm</option>
                    <option value='Brostep'>Brostep</option>
                    <option value='Latin'>Latin</option>
                    <option value='Pop'>Pop</option>
                    <option value='Dance Pop'>Dance Pop</option>
                    <option value='Boy Band'>Boy Band</option>
                    <option value='Panamanian Pop'>Panamanian Pop</option>
                    <option value='dfw rap'>dfw rap</option>
                    <option value='trap music'>Trap music</option>
                    <option value='country rap'>Country rap</option>
                    <option value='electropop'>Electropop</option>
                    <option value='reggaeton'>Reggaeton</option>
                    <option value='canadian hip hop'>Canadian hip hop</option>
                    <option value='pop house'>Pop house</option>
                </Dropdown>
                <SubmitButton onSubmit={handleInputChange}> Show genre</SubmitButton>
            </Form>

                {selectInput.length === 0 && <TracksList />}
                {selectInput.length !== 0 && (
                <TrackList>
                      {selectedGenres.map((genre) =>(
                          <TrackItem key={genre.id}>
                              <TopContainer>
                                  <TrackTitle>{genre.trackName}</TrackTitle>
                                  <ArtistTitle>{genre.artistName}</ArtistTitle>
                              </TopContainer>
                              <BottomContainer>
                                  <Genre>{genre.genre}</Genre>
                                  <Score>
                                      <P2>Score</P2>
                                      <P>{genre.popularity}</P>
                                  </Score>
                              </BottomContainer>
                          </TrackItem>
                      ))}
                  </TrackList>
                )}
        </>

    )
}
