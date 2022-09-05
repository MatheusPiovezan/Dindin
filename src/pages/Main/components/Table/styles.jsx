import styled, { css } from "styled-components";

export const Container = styled.div`

font-family: 'Lato', sans-serif;

.titles {
    display: flex;
    align-items: center;
    justify-content: flex-start; 
        
    height: 58px;

    padding: 0 0 0 27px;

    background: #FAFAFA;
    box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    .date {
        
        strong {
            display: flex;
            align-items: center;

            margin: 0 4px 0 0;
        }

        img {
            width: 12px;

            margin: 4px 4px 0 0;
        }
    }

    strong {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
     }
}

.table {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    height: 56px;

    padding: 0 0 0 27px;

    border-bottom: 1px solid #E0E0E0;

    strong {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
    }

    span {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
    }
}

.date {
        display: flex;
        align-items: center;

        text-align: start;
        cursor: pointer;
    }

.small {
    text-align: center;
    width: 10%;
}
.middle {
    text-align: center;
    width: 12%;
}
.big {
    text-align: center;
    width: 25%;
}

.edit-delete {
    display: flex;
    align-items: center;

    margin: 0 0 0 45px;
    gap: 13px;

    cursor: pointer;
}
`

export const Strong = styled.strong`
    ${props => props.valuecolor == 'entrada' ? css`color: #6460FB;` : css`color: #FA8C10;`}
`