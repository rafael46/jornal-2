import React, { Component } from 'react';

import { Unexpected, Unauthorized } from '../components';
import { Album } from '../components/album';

const padding = n => {
  return n > 9 ? n : '0' + n;
}

const today = () => {
  const dt = new Date();
  return [
    dt.getFullYear(),
    padding(dt.getMonth() + 1),
    padding(dt.getDate())
  ].join('-');
}

const album_path = user_id => {
  return user_id + '/' + today() + '/';
}

export default class Home extends Component {
  render() {
    const { user } = this.props;

    if (!user) { return <Unauthorized /> }
    if (!user.id) { return <Unexpected /> }

    return (
      <React.Fragment>
        <Album path={album_path(user.id)} />
      </React.Fragment>
    )
  }
}

// export default class Home extends Component {
//   render() {
//     return (
//       <h1>Home</h1>
//     )
//   }
// }
