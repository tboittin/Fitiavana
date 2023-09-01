import React from "react"
import PropTypes from "prop-types"

export default function YoutubeEmbed({ embedId, scaling}) {
  return (
    <iframe
      className="absolute top-0 left-0 w-full h-full"
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
