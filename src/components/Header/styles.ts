import styled from "styled-components";

export const Container = styled.header`
  padding-top: 33px;
  padding-bottom: 33px;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;

    button {
      padding: 0.9rem;
      border: 3px solid var(--orange-150);
      background: none;
      border-radius: 25px;
      color: var(--brown-600);
    }
  }
`

export const Contente = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`