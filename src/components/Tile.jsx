import React from 'react';

function Tile(props) {
    return (
        <section>
            {props.image && <img src={props.image}/>}
                <h2>{props.title}</h2>
            {props.children}
        </section>
    )
}

// conditional rendering uitgeschreven
// {props.image === true ? <img src={props.image}/> : <p></p>}

export default Tile

import React from 'react';

// function Tile({ image, imgDescription, title, children }) {
//     console.log(image, imgDescription, title, children)
//     return (
//         <section>
//             {image && <img src={image} alt={imgDescription} />}
//             <h2>{title}</h2>
//             {children}
//         </section>
//     );
// }
//
// export default Tile;