import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log('Pure comp render')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp
