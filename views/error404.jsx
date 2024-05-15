const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
        <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/style.css"/>
        </head>
            <main>
                <h1> 404: PAGE NOT FOUND </h1>
                <p> Oops, sorry, we can not find this page! </p>
                <div>
                <img src="/images/cat.jpg" alt="catError"/>
                <div>
                Photo by <a href="AUTHOR_LINK">Navin Ramaswaran</a> on <a href="https://www.pexels.com/photo/tabby-cat-on-desk-top-10802400/">Unsplash</a>
                </div>
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
            </main>
        </Def>
    )
}

module.exports = error404