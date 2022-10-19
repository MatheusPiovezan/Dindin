import styled from 'styled-components';
import Background from '../../assets/background.svg';

export const Container = styled.div`

height: 100vh;
width: 100vw;

font-family: 'Rubik', sans-serif;

background-image: url(${Background});
background-size: cover;

.logo-img {
    padding: 50px 0 0 120px;

    position: absolute;
}

.container-form {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
    width: 100vw;

    .background-form {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 60px 30px;
        
        background-color: #ffffff;
    }

    h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 2.8rem;
        line-height: 3.3rem;

        color: #7978D9;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;

        label {
            margin: 30px 0 8px 0;

            font-style: normal;
            font-weight: 400;
            font-size: 1.8rem;
            line-height: 2.1rem;

            color: #484848;
        }

        input {
            width: 400px;
            height: 50px;

            padding: 0 10px 0 10px;

            border: 1px solid #555555;
            border-radius: 5px;
        }

        button {
            all: unset;

            height: 50px;
            width: 100%;

            margin: 38px 0 12px 0;

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

    .link {
        font-style: normal;
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 1.7rem;

        color: #7B61FF;
    }
}

@media screen and (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo-img {
        padding: 25px 0;

        position: static;
    }

    .container-form {
        .background-form {
            padding: 40px 30px;
        }
    }
}

@media screen and (max-width: 600px) {
    .logo-img {
        padding: 25px 0 10px 0;
    }

    .background-form {
        width: 100%;

        form {
            width: 100%;

            input {
                width: 100%;
            }
        }
    }
}
`