import React from 'react';
import { connect } from 'react-redux'
import { addFeature } from '../actions'

const AdditionalFeature = props => {
  return (
    <li>
      <button
        className="button"
        onClick={() => {
          // Ternary to check if feature has already been added
          props.features.includes(props.feature)
            ? alert("Feature already Added!")
            : props.addFeature(props.feature)
        }}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    features: state.car.features
  }
}
export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
