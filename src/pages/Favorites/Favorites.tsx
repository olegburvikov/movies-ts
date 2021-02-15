import React from 'react'
import { getFavorites } from '../../api/get'

function Favorites() {
  React.useEffect(() => {
    getFavorites().then((data) => {
      console.log(data)
    })
  })

  return <div>Favorites</div>
}

export default Favorites
