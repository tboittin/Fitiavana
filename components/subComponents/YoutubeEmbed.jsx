import React from "react"
import PropTypes from "prop-types"

export default function YoutubeEmbed({ embedId, scaling}) {
  const scaledWidth=scaling*853
  const scaledHeight=scaling*480
  return (
    <iframe
      width={scaledWidth}
      height={scaledHeight}
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  )
}

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
}
