import * as React from 'react';

import {SVGAttributes} from 'react';

type Tprops= SVGAttributes<SVGAElement> & {
  name: String
}

const Icon: React.FC<Tprops> =(props)=>{
  const {name} = props
  return (
    <svg className="icon" aria-hidden="true">
      <use xlinkHref={`#icon-${name}`}/>
    </svg>
  )
}

export default Icon
