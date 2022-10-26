import styled from "styled-components";

export const Container = styled.div`
  background-image: url('/background.png');
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;

  .division {
    width: 70px;
    border: 1px solid var(--yellow-150);
    margin-top: 20px;
  }

  h2 {
    padding-top: 40px;
    width: 350px;

    text-align: center;

    color: var(--brown-700);
  }

  form {
    margin-top: 40px;
  }

  .box {
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

  .continuar {
    background: var(--brown-700);
    border: none;
    padding-left: 18px;
    padding-right: 18px;

    color: var(--orange-150);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    width: 350px;
    height: 50px;

    border-radius: 12px;
    margin-bottom: 32px;
  }

  .login {
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