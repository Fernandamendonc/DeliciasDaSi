import styled from "styled-components";

export const Container = styled.div`
  background-image: url('/background.png');
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;

  .title {
    font-size: 2rem;
    color: var(--brown-700);

    width: 310px;
    text-align: center;

    padding-top: 4rem;
    padding-bottom: 2rem;
  }

  .icongoogle {
    background: #C1D4FB;

    width: 350px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border: none;
    border-radius: 12px;

    cursor: pointer;
  }

  h4 {
    color: var(--orange-150);
  }

  .email {
    border: solid 3px var(--orange-150);

    padding-left: 18px;
    padding-right: 18px;

    display: flex;
    align-items: center;
    gap: 10px;

    width: 350px;
    height: 50px;

    border-radius: 12px;

    margin-bottom: 14px;

    input {
      background: none;
      border: none;
      box-shadow: 0 0 0 0;
      outline: 0;
    }

    input::placeholder {
      color: var(--orange-150);
    }
  }

  .password {
    border: solid 3px var(--orange-150);
    color: var(--orange-150);

    padding-left: 18px;
    padding-right: 18px;

    display: flex;
    align-items: center;
    gap: 10px;

    width: 350px;
    height: 50px;

    border-radius: 12px;

    input {
      background: none;
      border: none;
      box-shadow: 0 0 0 0;
      outline: 0;
    }

    input::placeholder {
      color: var(--orange-150);
    }
  }

  .forgot {
    padding-top: 14px;
    padding-bottom: 20px;
    color: var(--orange-150);
    width: 100%;

    display: flex;
    justify-content: flex-start;
  }

  .entrar {
    background: var(--brown-700);
    border: none;
    padding-left: 18px;
    padding-right: 18px;

    color: var(--orange-150);

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    width: 350px;
    height: 50px;

    border-radius: 12px;
  }

  .register {
    p {
      color: var(--orange-150);
    }

    a {
      color: var(--brown-700);
    }

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 5px;

    text-align: center;
    padding-top: 15px;
  }
`
export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`