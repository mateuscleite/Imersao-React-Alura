import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  align-items: flex-end;
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  border-radius: 4px;
  border: 2px solid;
  color: white;
  cursor: pointer;
  display: flex;
  flex: 0 0 298px;
  height: 197px;
  object-fit: cover;
  overflow: hidden;
  padding: 16px;
  position: relative;
  text-decoration: none;
  width: 298px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
