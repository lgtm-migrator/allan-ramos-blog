import React, { memo } from 'react'
import ReactDisqusComments from 'react-disqus-comments'
import PropTypes from 'prop-types'

import * as S from './styles'

const Comments = ({ title, url }) => {
  const completeUrl = `https://papobiblia.com.br/${url}`

  return (
    <S.Wrapper>
      <h2>Comentários</h2>
      <ReactDisqusComments
        shortname="papo-biblia"
        identifier={completeUrl}
        title={title}
        url={completeUrl}
      />
    </S.Wrapper>
  )
}

Comments.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default memo(Comments)
