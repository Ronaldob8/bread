const React = require('react');
const Default = require('./layouts/default');

function Index ({breads})  {
    return (
      <Default>
        <h2>Index Page</h2>
        {/*I have {breads[0].name} bread!*/}
        {/* this is a jsx comment*/}
        <ul>
            {
                breads.map((bread, index) => {
                    return (
                    <li key={index}>
                        <a href={`/breads/${index}`}>{bread.name}</a>
                    </li>
                )
            })}
        </ul>
      </Default>
    )
}


module.exports = Index;