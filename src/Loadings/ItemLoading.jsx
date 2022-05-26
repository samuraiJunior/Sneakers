import React from "react"
import ContentLoader from "react-content-loader"

const ItemLoading = (props) => (
    <ContentLoader 
    speed={2}
    width={210}
    height={260}
    viewBox="0 0 210 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="1" y="6" rx="0" ry="0" width="6" height="2" /> 
    <rect x="47" y="16" rx="0" ry="0" width="1" height="1" /> 
    <rect x="91" y="36" rx="0" ry="0" width="2" height="6" /> 
    <rect x="63" y="19" rx="0" ry="0" width="5" height="3" /> 
    <rect x="248" y="35" rx="0" ry="0" width="1" height="0" /> 
    <rect x="249" y="35" rx="0" ry="0" width="1" height="0" /> 
    <rect x="250" y="35" rx="0" ry="0" width="1" height="0" /> 
    <rect x="251" y="34" rx="0" ry="0" width="0" height="1" /> 
    <rect x="259" y="75" rx="0" ry="0" width="2" height="0" /> 
    <rect x="125" y="151" rx="0" ry="0" width="1" height="1" /> 
    <rect x="40" y="146" rx="3" ry="3" width="150" height="15" /> 
    <rect x="40" y="170" rx="3" ry="3" width="93" height="15" /> 
    <rect x="40" y="206" rx="8" ry="8" width="82" height="22" /> 
    <rect x="158" y="200" rx="8" ry="8" width="32" height="32" /> 
    <rect x="40" y="36" rx="10" ry="10" width="150" height="93" />
  </ContentLoader>

)


export default ItemLoading