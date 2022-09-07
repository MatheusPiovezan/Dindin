import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 8px 15px;
  
    background-color: #E4F2FD;
    border-radius: 5px; 

    .icon-polygon {
        position: absolute;
        top: -7px;
        right: 7px;
        width: 0;
        height: 0;

        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 10px solid #E4F2FD;
    }

    .btn-popup {
        display: flex;
        
        width: 100%;

        margin-top: 10px;
        gap: 7px;

        button {
            all: unset;

            width: 50px;
            height: 20px;

            text-align: center;
            border-radius: 4px;
            color: #FFFFFF;
            cursor: pointer;
        }
    }
    
    .btn-popup button:first-child {
        background-color: #3A9FF1;
    }
    .btn-popup button:last-child {
        background-color: #FF576B;
    }
`