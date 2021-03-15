export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const removeFeature = (featureId) => {
  // console.log(featureId)
  return({type:REMOVE_FEATURE, payload: featureId})
}

