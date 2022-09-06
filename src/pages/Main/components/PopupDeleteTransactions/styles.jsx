import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 111px;
    height: 46px;
    
    position: absolute;
    z-index: 1;

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
        padding: 0 16px;

        button {
            all: unset;

            text-align: center;
        }
    }
    
    .btn-popup button:first-child {
        width: 37px;
        height: 15px;
    
        background-color: #3A9FF1;
        border-radius: 4px;
        color: #FFFFFF;
    }
    .btn-popup button:last-child {
        width: 37px;
        height: 15px;
    
        background-color: #FF576B;
        border-radius: 4px;
        color: #FFFFFF;
    }
`