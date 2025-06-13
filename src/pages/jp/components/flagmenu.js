import React from 'react'
import {Link} from "gatsby"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    
`
const StyledLink = styled(Link)`
    padding: 10px;
    font-weight:bolder;
    color:white;
`
const Flagmenu = () => {
    return (
        <Container >
          <StyledLink to={`/`}>ESP</StyledLink>
          <StyledLink to={`/jp/`}>JAP</StyledLink>
          <StyledLink to={`/pt`}>PORT</StyledLink>
        </Container>
    )
}

export default Flagmenu