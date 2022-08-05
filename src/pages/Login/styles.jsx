import styled from "styled-components";
import Background from '../../assets/background.svg';

export const Container = styled.div`
font-family: 'Rubik', sans-serif;
background-image: url(${Background});
background-size: cover;

.logo-img {
    padding: 50px 0 0 120px;

    position: absolute;
}

.registration {
    h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 52px;
        line-height: 62px;

        color: #FFFFFF;

        span {
            color: #7978D9;
        }
    }

    p {
        margin: 30px 100px 40px 0;

        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 33px;

        color: #FFFFFF;
    }

    button {
        all: unset;

        width: 284px;
        height: 48px;

        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        text-align: center;

        background-color: #7978D9;
        color: #ffffff;
        border-radius: 5px;
        cursor: pointer;
    }
}

.container-row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    
    height: 100vh;
    width: 100vw;

    padding: 0 120px;

    .form-login {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 60px 40px;

        background-color: #ffffff;

        h1 {
            margin: 0 0 40px 0;

            font-style: normal;
            font-weight: 500;
            font-size: 28px;
            line-height: 33px;

            color: #7978D9;
        }

        form {
            display: flex;
            flex-direction: column;

            label {
                margin: 0 0 8px 0;

                
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 21px;

                color: #484848;
            }

            input {
                width: 400px;
                height: 50px;

                padding: 0 10px;
                margin: 0 0 25px 0;

                border: 1px solid #555555;
                border-radius: 5px;
            }
        }

        button {
            all: unset;

            width: 400px;
            height: 40px;

            margin: 40px 0 0 0;

            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 17px;
            text-align: center;

            background-color: #7978D9;
            color: #ffffff;
            border-radius: 5px;
            cursor: pointer;
        }
    }
}
`