import React, { memo } from "react";
import {
    // ZoomableGroup, // turn on if we need to enable zooming
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";
import africa from './africa';
import { useHistory } from 'react-router-dom';



const geoUrl = africa;

const rounded = (num, s) => {
    if (num > 1000000000) {
        return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
        return Math.round(num / 100000) / 10 + "M";
    } else {
        return Math.round(num / 100) / 10 + "K";
    }
};


const MapChart = ({ setTooltipContent, setMovieDataContent }) => {

    const history = useHistory();

    const handleClick = (countryData) => {
        history.push({
            pathname: "/country", state: { message: countryData }
        });
    }

    return (
        <>
            <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map(geo => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                onMouseEnter={() => {
                                    const { geounit, totalmovies } = geo.properties;
                                    setTooltipContent(`${geounit} — ${rounded(totalmovies, geo)}`);
                                    setMovieDataContent(totalmovies);
                                }}
                                onMouseLeave={() => {
                                    setTooltipContent("");
                                    setMovieDataContent("");
                                }}
                                onClick={() => {
                                    const { geounit } = geo.properties;
                                    handleClick(geounit);
                                }}
                                style={{
                                    default: {
                                        fill: "#D6D6DA",
                                        outline: "none"
                                    },
                                    hover: {
                                        fill: "#F53",
                                        outline: "none"
                                    },
                                    pressed: {
                                        fill: "#E42",
                                        outline: "none"
                                    }
                                }}
                            />
                        ))
                    }
                </Geographies>
            </ComposableMap>
        </>
    );
};

export default memo(MapChart);
