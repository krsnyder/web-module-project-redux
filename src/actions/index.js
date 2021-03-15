export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const removeFeature = (featureId) => {
  return({type:REMOVE_FEATURE, payload: featureId})
}

