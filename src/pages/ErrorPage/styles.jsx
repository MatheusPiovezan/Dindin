import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100vw;
    height: 100vh;

    font-family: "Montserrat","Verdana",sans-serif;

    background-color: rgba(255, 255, 255, 0.48); 
    
    h1 {
        font-size: 7rem;
        font-weight: 800;
        line-height: 120%;
        color: #2b2d30;
        text-align: center;
    }

    h2 {
        font-size: 2rem;
        font-weight: 800;
        line-height: 120%;
        color: #2b2d30;
        text-align: center;

        span {
            color: #7978D9;
        }
    }
`