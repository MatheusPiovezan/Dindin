import styled from "styled-components";

export const Container = styled.div`
    display: inline-block;
    
    .categorys {

        padding: 4px 10px;
        margin: 0 12px 9px 0;
        
        box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        cursor: pointer;

        span:first-child {
            margin: 0 10px 0 0;

            font-style: normal;
            font-weight: 400;
            font-size: 1.0rem;
            line-height: 1.2rem;
        }
    
    }

    .checked {
        background-color: #7978D9;
        color: white;
    }

    .unchecked {
        background-color: #FAFAFA;
        color: black;
    }  
`