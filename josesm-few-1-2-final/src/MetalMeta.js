import React from 'react'

import data from './metal.json'

function MetalMeta() {
    let len = data.length

  return (
    <div>
        Total bands:{ len}
    </div>
  )
}

export default MetalMeta