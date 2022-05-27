import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={386}
    height={444}
    viewBox="0 0 386 444"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="350" y="201" rx="0" ry="0" width="0" height="1" />
    <rect x="5" y="345" rx="0" ry="0" width="313" height="24" />
    <rect x="5" y="381" rx="0" ry="0" width="121" height="24" />
    <rect x="5" y="1" rx="0" ry="0" width="354" height="330" />
  </ContentLoader>
)

export default MyLoader