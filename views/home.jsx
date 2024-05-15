const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/style.css"/>
        </head>
          <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/overnightoats.jpg" alt="Oats" />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Melissa Belanger</a> on <a href="https://unsplash.com/@melissabelanger">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                     <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home