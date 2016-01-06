import React from 'react';
import ReactDOM from 'react-dom';
import ImageAction from './actions/ImageAction';
import ImageGrid from './components/ImageGrid';

// Cada 5 segundos: recargar!
setInterval(function() {
    ImageAction.fetchList(); 
}, 5000);

ReactDOM.render(
  <ImageGrid />,
   document.getElementById('container')
)