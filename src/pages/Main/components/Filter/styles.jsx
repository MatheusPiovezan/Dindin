import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90%;

  font-family: "Rubik", sans-serif;

  button {
    all: unset;

    display: flex;
    align-items: center;

    margin-bottom: 25px;
    padding: 8px 15px;

    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.4rem;

    background: #fafafa;
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

    background-color: #fafafa;
    box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    .div-strong {
      margin: 0 0 20px 0;

      font-style: normal;
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 1.4rem;

      color: #b9b9b9;
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
      font-size: 1.2rem;
      line-height: 1.4rem;

      box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      cursor: pointer;
    }

    button:first-child {
      background-color: #fafafa;
    }

    button:last-child {
      background-color: #7978d9;
      color: #ffffff;
    }
  }
`;
export const Div = styled.div`
  ${(props) =>
    props.colorDiv &&
    css`
      background-color: #6460fb;
    `}
`;
