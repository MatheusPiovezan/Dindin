import styled from "styled-components";
import Background from '../../assets/background.svg';

export const Container = styled.div`
height: 100vh;

font-family: 'Rubik', sans-serif;
background-image: url(${Background});
background-size: cover;

.logo-img {
    padding: 50px 0 0 120px;

    position: absolute;
}

.registration {
    width: 40%;

    h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 5.2rem;
        line-height: 6.2rem;

        color: #FFFFFF;

        span {
            color: #7978D9;
        }
    }

    p {
        margin: 3.0rem 0 4.0rem 0;

        font-style: normal;
        font-weight: 400;
        font-size: 2.8rem;
        line-height: 3.3rem;

        color: #FFFFFF;
    }

    .link {
        all: unset;

        padding: 11px 80px;

        font-style: normal;
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 1.7rem;
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

        padding: 6rem 4rem;
        width: 48rem;
        height: 48rem;

        background-color: #ffffff;

        h1 {
            margin: 0 0 4.0rem 0;

            font-style: normal;
            font-weight: 500;
            font-size: 2.8rem;
            line-height: 3.3rem;

            color: #7978D9;
        }

        form {
            display: flex;
            flex-direction: column;
            width: 100%;

            label {
                margin: 0 0 0.8rem 0;

                
                font-style: normal;
                font-weight: 400;
                font-size: 1.8rem;
                line-height: 2.1rem;

                color: #484848;
            }

            input {
                width: 100%;
                height: 5rem;

                padding: 0 10px;
                margin: 0 0 2.5rem 0;

                border: 1px solid #555555;
                border-radius: 5px;
            }

            button {
                all: unset;
    
                width: 100%;
                height: 4rem;
    
                margin: 4.0rem 0 0 0;
    
                font-style: normal;
                font-weight: 700;
                font-size: 1.4rem;
                line-height: 1.7rem;
                text-align: center;
    
                background-color: #7978D9;
                color: #ffffff;
                border-radius: 5px;
                cursor: pointer;
            }
        }
    }

    .link-mobile {
        display: none;
    }
}

@media screen and (max-width: 1200px) {
    .registration {
        display: none;
    }

    .container-row {
        justify-content: center;

        .link-mobile {
            display: block;

            margin: 1.9rem 0 0 0;

            font-style: normal;
            font-weight: 700;
            font-size: 1.4rem;
            line-height: 1.7rem;
            text-align: center;

            color: #7B61FF;
        }
    }

}

@media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo-img {
        padding: 50px 0 0 0;

        position: static;
    }

    .container-row {
        width: 100vw;
        height: 70vh;

        padding: 0;

        .form-login {
            width: 100%;

            input {
                width: 100%;

                padding: 0;
            }
        }
    }
}
`