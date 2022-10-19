import styled from "styled-components";

export const Container = styled.div`

background: linear-gradient(90.23deg, #05EDE3 0.02%, #645FFB 99.63%);

.logo-user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 40px 100px 0 100px;
    
        .user {
            display: flex;
            align-items: center;
            justify-content: center;

            span {
                margin: 0 16px 0 0;

                font-style: normal;
                font-weight: 700;
                font-size: 1.4rem;
                line-height: 1.7rem;

                color: #FFFFFF;
            }

            img {
                cursor: pointer;
            }
        }
    }

    .home {
        margin-top: 50px;
        padding: 55px 100px 0 100px;

        border-radius: 60px 60px 0px 0px;
        background-color: #ffffff;

        .div-row {
            display: flex;

            gap: 40px;
        }
    }

    @media screen and (max-width: 1200px) {
        .home {
            .div-row {
                flex-direction: column-reverse;
                align-items: center;
            }
        }
    }

    @media screen and (max-width: 600px) {
        .home {
            margin-top: 10px;
            padding: 50px 10px 25px 10px;
        }

        .logo-user {
            padding: 15px 10px 0 10px;

            .user img {
                flex-direction: column;
            }
            gap: 20px;
        }
    }
`