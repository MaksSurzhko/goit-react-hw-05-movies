import styled from 'styled-components';

export const SectionTopMovies = styled.section`
  padding: 20px;
  width: 1440px;
  margin: 0 auto;
  background-color: #fff;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 700;
  color: black;
`;

export const ListTopMovies = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  li {
    font-size: 18px;
    font-weight: 600;
  }
`;
export const MoviesText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: black
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
`;

// export const Links = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   color: black
//   font-size: 18px;
//   font-weight: 600;
//   text-decoration: none;
// `;