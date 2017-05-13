import Inferno from 'inferno';

var h = require('inferno-hyperscript');

Inferno.render(
  h('.example', [
    h('a.example-link', {
      href: '#'
    }, [
      'Hello',
      props.whom,
      '!'
    ])
  ]),
  document.getElementById("app")
)

