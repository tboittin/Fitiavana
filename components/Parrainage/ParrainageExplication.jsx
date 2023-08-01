import React from "react"
import VideoSection from "../VideoSection"
export default function ParrainageExplication() {
  return (
    <div className="mt-5 pt-5" id="title">
      <h1>Parrainages</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        autem magnam sequi beatae quaerat porro inventore ipsam, reprehenderit,
        rem qui dolores dolorem laborum asperiores excepturi. Odit iusto
        laboriosam exercitationem beatae?
      </p>
      <div className="container h-100">
        <div className="row">
          <div className="col">
            <VideoSection id="WO7SRf5PCE0" />
          </div>
          <div className="col">
            <iframe
              src="https://docs.google.com/viewerng/viewer?url=https://static.blog4ever.com/2008/01/171408/fiche-parrainage-2023_9609228.docx"
              style={{ width: "100%", height: "600px" }}
            >
              Votre navigateur ne supporte pas les iframes.
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
