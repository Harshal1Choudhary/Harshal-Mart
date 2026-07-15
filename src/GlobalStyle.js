import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  /* 1rem = 10px */
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.helper} transparent;
}

body::-webkit-scrollbar {
  width: 0.8rem;
}

body::-webkit-scrollbar-track {
  background-color: transparent;
}

body::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.colors.helper};
  border-radius: 9px;
}

h1, h2, h3, h4 {
  font-family: "Sora", "Inter", sans-serif;
  color: ${({ theme }) => theme.colors.heading};
  line-height: 1.15;
}

h1 {
  font-size: 5.4rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

h2 {
  font-size: 3.8rem;
  font-weight: 700;
  white-space: normal;
}

h3 {
  font-size: 1.8rem;
  font-weight: 600;
}

p, button {
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.6rem;
  line-height: 1.6;
  font-weight: 400;
}

a {
  text-decoration: none;
  color: inherit;
}

li {
  list-style: none;
}

${"" /* reusable code section  */}

.container {
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2.4rem;
}

.grid {
  display: grid;
  gap: 3.2rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
  gap: 6rem;
  align-items: center;
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column {
  grid-template-columns: 1fr 1.2fr .5fr .8fr;
}

.grid-five-column {
  grid-template-columns: repeat(5, 1fr);
}

.common-heading {
  font-size: 3.4rem;
  font-weight: 700;
  margin-bottom: 4rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.heading};
}

.intro-data {
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.helper};
}

.caption {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.helper};
  padding: 0.6rem 1.4rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 999px;
  box-shadow: ${({ theme }) => theme.colors.shadow};
}

input, textarea {
  max-width: 50rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  padding: 1.4rem 1.8rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus, textarea:focus {
  outline: none;
  border-color: ${({ theme }) => theme.colors.helper};
  box-shadow: 0 0 0 3px rgba(98, 84, 243, 0.15);
}

input[type="submit"] {
  max-width: 16rem;
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.colors.btn};
  color: ${({ theme }) => theme.colors.white};
  padding: 1.4rem 2.2rem;
  border: none;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

input[type="submit"]:hover {
  background-color: ${({ theme }) => theme.colors.helperDark};
  transform: translateY(-2px);
}

@media (max-width: ${({ theme }) => theme.media.tab}) {
  .container {
    max-width: 130rem;
    padding: 0 3.2rem;
  }
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  html {
    font-size: 50%;
  }

  .grid {
    gap: 3.2rem;
  }

  .grid-two-column, .grid-three-column, .grid-four-column {
    grid-template-columns: 1fr;
  }
}

`;
