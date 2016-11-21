import React from 'react';

class JumpList extends React.Component {

    render() {
        return (
          <p className="post-meta">
            <a href="#list-available">
              <i className="fa fa-th-list"></i> Jump to methods-list</a>
          </p>
        );
    }

}

module.exports = JumpList;
