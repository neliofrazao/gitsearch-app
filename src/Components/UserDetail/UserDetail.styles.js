import styled from 'styled-components'

const UserContainer = styled.div`
  width: 100%;
  margin-bottom: 3em;
  & .user-image {
    border: 5px solid;
    display: flex;
    & img {
      width: 100%;
    }
  }
`

export default UserContainer
