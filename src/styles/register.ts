import styled from "styled-components";

export const Container = styled.div `
  background-image: url('/background.png');
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;

  .division {
    width: 70px;
    border: 1px solid var(--yellow-150);
    margin-top: 25px;
  }

  h2 {
    padding-top: 40px;
    width: 350px;

    text-align: center;

    color: var(--brown-700);
  }

  .icongoogle {
    background: var(--yellow-700);
    color: var(--brown-700);

    width: 350px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border: none;
    border-radius: 12px;

    margin-top: 30px;

    cursor: pointer;
  }

  h4 {
    color: var(--orange-150);
    font-weight: lighter;
  }

  form {
    display: grid;
    grid-template-columns: auto auto;
    gap: 1rem;

    label {
      color: var(--brown-600);
    }

    input {
      color: var(--orange-150);
      width: 260px;
      background: none;
      border: none;
      font-size: 1rem;

      box-shadow: 0 0 0 0;
      outline: 0;
    }

    .box {
      border: solid 2px var(--orange-150);
      padding: 1rem;
      border-radius: 1rem;
      grid-column-start: 1;
    }
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

  .cadastrar {
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

    margin-top: 2rem;

    border-radius: 12px;
  }
`

export const Content = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
`