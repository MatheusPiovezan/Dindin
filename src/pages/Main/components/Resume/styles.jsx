import styled from "styled-components";

export const Container = styled.div`

    .container {

        max-width: 236px;
    
        margin-top: 54px;
        padding: 26px 33px 31px 33px;

        font-family: 'Rubik', sans-serif;

        background-color: #FAFAFA;
        box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.1);
        border-radius: 10px;

        h1 {
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 21px;

            color: #2F2F2F;
        }

        .entrie-exit {
            display: flex;
            flex-direction: column;

            margin: 23px 0 20px 0;
            gap: 10px;

            span {
                font-style: normal;
                font-weight: 500;
                font-size: 13px;
                line-height: 15px;

                color: #2F2F2F;
            }

            .span-entrie {
                color: #645FFB;
            }

            .span-exit {
                color: #FA8C10;
            }
        }

        .spans-spaces {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .balance {

            padding-top: 16px;

            border-top: 1px solid #EAEAEA;

            span:first-child {
                font-style: normal;
                font-weight: 700;
                font-size: 14px;
                line-height: 17px;

                color: #2F2F2F;
            }

            span:last-child {
                font-weight: 500;
                font-size: 14px;
                line-height: 17px;

                color: #3A9FF1;
            }
        }
    }

    button {
        all: unset;

        width: 236px;
        height: 42px;

        margin: 16px 0 0 0;

        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        text-align: center;

        color: #FFFFFF;
        background-color: #7978D9;
        border-radius: 5px;
        cursor: pointer;
    }
`