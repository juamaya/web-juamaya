import React from 'react'

import './Articulo.css'

const Articulo = ({ blog, imagen , p1,p2,p3,p4, url}) => {
    return (
        <>
            <div className="articulo">
                <div className="imagen">
                    <img src={imagen} width={400} />
                </div>

                <div className="texto">
                    <h2>{blog}</h2>
                    <p>✅ {p1}</p>
                    <p>✅ {p2}</p>
                    <p>✅ {p3}</p>
                    <p>✅ {p4}</p>

                    <button class="cssbuttons-io-button"> Read More
                        <div class="icon">
                            <a href={url} target="_blank" >
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>

                            </a>
                        </div>
                    </button>
                    <hr />
                </div>

            </div>
        </>

    )
}

export default Articulo