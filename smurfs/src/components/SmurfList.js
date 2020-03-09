import React from "react";
import { connect } from "react-redux"
import Loader from "react-loader-spinner"

import Smurf from "./Smurf"

const SmurfList = props => {
    return (
        <div>
            {props.isLoading && (
                <Loader
                    type="Puff"
                    color="#DFDCE3;"
                    height={100}
                    width={100}
                    timeout={3000} //3 sec
                /> 
            )}
            {!props.isLoading && props.smurfs.length && props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf}/>)}
            {!props.isLoading && props.error && <h2>{props.error}</h2>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(SmurfList)