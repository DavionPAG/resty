import React from 'react'
import PrettyJSON from "react-json-view";

import './results.scss'

export default class ApiResutls extends React.Component {
    render() {
        return (
            <div name="" id="results">
                <section>
                    <p>Headers</p>
                    <br />
                    <PrettyJSON
                    src={this.props.reqHeaders}
                    theme="monokai"
                    />
                </section>
                <section>
                    <p>Body</p>
                    <br />
                    <PrettyJSON
                    src={this.props.results}
                    theme="solarized"
                    />                                       
                </section>

            </div>
        )
    }

}


