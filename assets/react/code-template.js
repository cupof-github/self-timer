import React from 'react';

class Sunday extends React.Component {
    name() {
        return 'onSunday';
    }
    
    title() {
        return 'Sunday( task )';
    }

    argument() {
        return 'task [ Function ] ';
    }

    return () {
        return 'Function || Bool';
    }

    description() {
        return 'This methods are return callback when you want to run on "day of the week".  If not in "task" arugument, just return "true".';
    }

    code() {
        var code = `var task = new SelfTimer(new Date());
// sunday() usage
task.on().Sunday(function() {
  // callback
  console.log("do something!")
});`

        return (
            <pre>
              <code className="language-javascript">{code}</code>
            </pre>
        );
    }

    render() {
        return (
            <div className="post-preview">
              <h2 className="post-title" id={this.name()}>
                <i className="fa fa-code"></i>&nbsp;
                {this.title()}
              </h2>

              <p className="post-subtitle">
                {this.description()}
              </p>
              <h5>group: </h5>
              <ul className="none">
                <li>.on()</li>
              </ul>
              <h5>argument :
              </h5>
              <ul className="none">
                <li>{this.argument()}</li>
              </ul>
              <h5>return :
              </h5>
              <ul className="none">
                <li>{this.return()}</li>
              </ul>
              <br/>
              <h5>example :
              </h5>
              {this.code()}
              <hr/>
            </div>
        );
    }
}

module.exports = Sunday;
