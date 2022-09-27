import styled from "styled-components";

export const Container = styled.div`

width: 100%;

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
        margin: 0 0 60px 0;
        padding: 32px 0 13px 32px;

        background-color: #FAFAFA;
        box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.1);
        border-radius: 10px;

        .div-strong {
            margin: 0 0 20px 0;

            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;

            color: #B9B9B9;
        }

        .categorys {
            display: inline-block;

            padding: 4px 10px;
            margin: 0 12px 9px 0;
            
            background-color: #FAFAFA;
            box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            cursor: pointer;

            span {
                margin: 0 10px 0 0;

                font-style: normal;
                font-weight: 400;
                font-size: 10px;
                line-height: 12px;
            }
        }
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