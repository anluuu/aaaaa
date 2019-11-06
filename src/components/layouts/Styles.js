import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Home = styled(Link)`
  color: #cccccc;
  font-weight: bold;
  padding: 0.45rem;
  margin: 0 0.25rem;
`;
export const About = styled(Link)`
  color: #cccccc;
  font-weight: bold;
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
`;


export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  z-index: 1;
  width: 100%;
  opacity: 0.9;
  margin-bottom: 1rem;
  background: #333333;
  color: #fff;
`;

export const UlNav = styled.ul`
  list-style: none;
  display: flex;
`;

export const EachCard = styled.img`
  width: 150px;
  cursor: pointer;
`;

export const CardStyle = styled.div`
  display: flex;
  width: min-content;
  margin: 1rem; 
  
  &:hover {
    border: 4px solid red;
    border-radius: 15px;
    width: min-content;
  }
`;

export const PlayAgain = styled.a`
  display: inline-block;
  background: var(--light-color);
  color: #333;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in;
  outline: none;
  margin: 1rem;
`;

export const TextCenter = styled.div`
  text-align: center;
`;

export const AllCenter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const TextLight = styled.h1`
  color: #cccccc;
  font-weight: bold;
`;

export const LastCardImg = styled.img`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 200px;
`;