// Style your elements here
import styled from 'styled-components'

export const NotesMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #ffffff;
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`
export const NotesMainHeading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 27px;
  font-weight: 700;
  color: #4c63b6;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const NotesInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 100%;
  padding: 20px;
  box-shadow: 0px 0px 6px 0px #d8d8d8;
  margin-bottom: 20px;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    height: 300px;
    padding: 30px;
  }
`

export const Input = styled.input`
  height: 40px;
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
  outline: none;
  border: none;
  padding-left: 15px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #475569;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const TextArea = styled.textarea`
  height: 30%;
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
  outline: none;
  border: none;
  padding-left: 15px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #475569;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    height: 40%;
  }
`
export const AddButton = styled.button`
  height: 40px;
  width: 80px;
  cursor: pointer;
  outline: none;
  border: none;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  background-color: #4c63b6;
  align-self: flex-end;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    height: 45px;
    width: 100px;
  }
`
export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  width: 100%;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 250px;
  }
`
export const EmptyImage = styled.img`
  height: 50px;
  width: 50px;
  @media screen and (min-width: 768px) {
    height: 80px;
    width: 80px;
  }
`

export const EmptyHeading = styled(NotesMainHeading)`
  font-family: 'Roboto';
  color: #1e293b;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 29px;
  }
`
export const EmptyDescription = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 500;
  color: #475569;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const NotesList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-left: 0px;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
