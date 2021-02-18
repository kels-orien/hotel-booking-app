import React from 'react';
import Link from 'next/link';

const Cities = ({ city_name, number_of_hotels }) => {
    return (
        <div>
            <Link href={`/city/${city_name}`}>
            <div className="col-md-2 col-sm-4 col-xs-6">
                    <a href="#">
                        <div className="suggested_city">
                            <h2 className="heading">{city_name} </h2>
                            <p>
                               {number_of_hotels}
                            </p>
                        </div>
                    </a>
                </div>
                </Link>
        </div>
    )
}

export default Cities
