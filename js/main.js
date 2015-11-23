require.config({
  baseUrl: './js',
  paths: {
    me: 'app/me',
    print: 'lib/print',
    myApp: 'app/app'
  }
})

require(['myApp']);
