import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Hidden } from '@material-ui/core'
import { Person, PeopleAlt, PeopleOutline, Room, GitHub } from '@material-ui/icons'
import { TextIcon } from '../../Shared'
import UserContainer from './UserDetail.styles'

const UserDetail = ({ followers, following, htmlUrl, thumbnailPath, userName, userLocation }) => (
  <UserContainer data-testid="data-user-detail">
    <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={3}>
      <Hidden smDown>
        <Grid item xs={1}>
          <div className="user-image">
            <img src={thumbnailPath} alt={userName} />
          </div>
        </Grid>
      </Hidden>
      <Grid item xs={12} md={9}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextIcon text={userName} icon={<Person />} />
            <TextIcon text={userLocation} icon={<Room />} />
            <TextIcon text={htmlUrl} icon={<GitHub />} />
          </Grid>
          <Grid xs={12} item md={6}>
            <TextIcon text={`Seguidores: ${followers}`} icon={<PeopleAlt />} />
            <TextIcon text={`Seguindo: ${following}`} icon={<PeopleOutline />} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </UserContainer>
)

UserDetail.propTypes = {
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  htmlUrl: PropTypes.string.isRequired,
  thumbnailPath: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userLocation: PropTypes.string.isRequired,
}

export default UserDetail
