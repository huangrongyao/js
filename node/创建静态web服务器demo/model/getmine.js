exports.getmine = function (extname) {
  switch (extname) {
    case '.html':
      return 'text/html'
    case '.js':
      return 'text/javascript'
    case '.css':
      return 'text/css'
    default:
      return 'text/html'
  }
}