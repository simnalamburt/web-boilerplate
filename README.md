My Web Boilerplate
========

```sh
# To find where default appname has been used
ag appname

# Prerequisite
npm install bower webpack-dev-server -g
gem install rails --no-document

# Client
cd client
npm install
bower install
webpack-dev-server --progress --colors

# Server
cd server
bundle install
rails server
```

### Client

*   [npm][]
*   [bower][]
*   [webpack][]
*   [stylus][]
*   [livescript][]
*   [AngularJS][]
*   [Semantic UI][]

### Server

*   [Rails][]
*   [redis][]
*   [PostgreSQL][]

--------

[BSD 2-Clause](LICENSE.md)

[npm]: https://npmjs.com
[bower]: http://bower.io
[webpack]: http://webpack.github.io
[stylus]: http://learnboost.github.io/stylus
[livescript]: http://livescript.net
[AngularJS]: https://angularjs.org
[Semantic UI]: http://semantic-ui.com
[Rails]: http://rubyonrails.org
[redis]: http://redis.io
[PostgreSQL]: http://postgresql.org
