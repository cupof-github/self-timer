import React from 'react';

class CodeTab extends React.Component {

    render() {
        return (
            <span>

              <ul className="nav nav-pills nav-justified" role="tablist">
                <li role="presentation" className="active">
                  <a href={'#' + this.props.id_1} aria-controls={this.props.id_1} role="tab" data-toggle="tab">Callback</a>
                </li>
                <li role="presentation">
                  <a href={'#' + this.props.id_2} aria-controls={this.props.id_2} role="tab" data-toggle="tab">Promise</a>
                </li>

              </ul>

              <span className="tab-content">
                <span role="tabpanel" className="tab-pane fade in active" id={this.props.id_1}>{this.props.code_1}</span>
                <span role="tabpanel" className="tab-pane fade" id={this.props.id_2}>{this.props.code_2}</span>

              </span>

            </span>
        );
    }
}

module.exports = CodeTab;
