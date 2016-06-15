import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
  render: function() {
    return <div>HotModuleReplacement enabled</div>;
  }
});

ReactDOM.render(<App/>, document.getElementById('container'));
