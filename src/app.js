import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
  render: function() {
    return <div>HotModuleReplacement enabled</div>;
  }
});

// for karma test runner, follow line should not contain.
// ReactDOM.render(<App/>, document.getElementById('container'));

module.exports = App;
