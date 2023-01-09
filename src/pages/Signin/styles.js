import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 0.7rem;
height: 100vh;
`

export const Content = styled.div`
gap: 1rem;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
box-shadow: 0 1px 2px #0003;
background-color: #0E1436;
max-width: 350px;
padding: 20px;
border-radius: 1rem;
`

export const Label = styled.label`
font-size: 2rem;
font-weight: 600;
color: #EEE;
`

export const LabelSignin = styled.label`
font-size: 1rem;
color: #EEE;

`

export const LabelError = styled.label`
font-size: 0.9rem;
color: orange;
`

export const Strong = styled.strong`

cursor: pointer;

a {
    text-decoration: none;
    color: #3EB2FE;
}

`