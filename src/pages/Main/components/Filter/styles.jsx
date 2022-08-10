import styled from "styled-components";

export const Container = styled.div`

font-family: 'Rubik', sans-serif;
    
    button {
        all: unset;

        display: flex;
        align-items: center;

        margin-bottom: 25px;
        padding: 8px 15px;

        font-weight: 700;
        font-size: 12px;
        line-height: 14px;

        background: #FAFAFA;
        box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        cursor: pointer;

        img {
            margin-right: 4px;
        }
    }

    .filters {
        padding: 32px 0 13px 32px;

        background-color: #FAFAFA;
        box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    }

    .buttons {
        display: flex;

        margin: 16px 0 0 0;
        gap: 18px;

        button {
            all: unset;

            width: 98px;
            height: 30px;

            text-align: center;
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 14px;

            box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            cursor: pointer;
        }

        button:first-child {
            background-color: #FAFAFA;
        }

        button:last-child {
            background-color: #7978D9;
            color: #FFFFFF;
        }
    }
`