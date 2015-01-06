My Web Boilerplate
========

To change default appname

```
ag appname
```

### Client

```sh
# prerequisite
npm install bower webpack-dev-server -g

cd client
npm install && bower install
webpack-dev-server --progress --colors
```

*   [npm][]
*   [bower][]
*   [webpack][]
*   [stylus][]
*   [livescript][]
*   [AngularJS][]
*   [Semantic UI][]

### Server

```sh
# prerequisite
gem install rails --no-document

cd server
bundle install
rails server
```

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
