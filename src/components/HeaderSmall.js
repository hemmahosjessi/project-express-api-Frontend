import React from "react";
import { Link } from 'react-router-dom'
import { 
    HeaderH1,
    SpanOneSmall,
    SpanTwoSmall,
    Header,
    ButtonContainer,
    Button
} from 'utils/styles'



export const HeaderSmall = () => {

    return (
        <Header>
            <HeaderH1>All you need is <SpanOneSmall>Love</SpanOneSmall> <SpanTwoSmall>MUSIC</SpanTwoSmall></HeaderH1>
            <ButtonContainer>
                <Link  to='/'>
                    <Button>Back to startpage</Button>
                </Link>
            </ButtonContainer>
        </Header>
    )
}

