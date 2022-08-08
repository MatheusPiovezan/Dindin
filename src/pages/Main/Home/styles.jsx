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
                font-size: 14px;
                line-height: 17px;

                color: #FFFFFF;
            }
        }
    }

    .home {
        margin-top: 50px;
        padding: 55px 100px 0 100px;

        border-radius: 60px 60px 0px 0px;
        background-color: #ffffff;
    }
`