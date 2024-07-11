// Style your elements here
import styled from 'styled-components'

export const NotesEachList = styled.li`
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 0px 4px 0px #d8d8d8;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 300px;
    padding: 20px;
  }
`
export const Title = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
export const Note = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #475569;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
