import React from 'react';
// import CodeTabPractical from '../../partials/codeTabPractical';
//

{/* <CodeTabPractical
  id_1="atBetweenCallback"
  code_1={this.code()}
  id_2="atBetweenPromise"
  code_2={this.code2()}
  id_3="atBetweenPractical"
  code_3={this.example()}
/> */}

class CodeTabPractical extends React.Component {

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
                <li role="presentation">
                  <a href={'#' + this.props.id_3} aria-controls={this.props.id_3} role="tab" data-toggle="tab">Example</a>
                    </li>

                </ul>

                <span className="tab-content">
                    <span role="tabpanel" className="tab-pane fade in active" id={this.props.id_1}>{this.props.code_1}</span>
                    <span role="tabpanel" className="tab-pane fade" id={this.props.id_2}>{this.props.code_2}</span>
                    <span role="tabpanel" className="tab-pane fade" id={this.props.id_3}>{this.props.code_3}</span>
                </span>

            </span>
        )
    }
}

module.exports = CodeTabPractical;
