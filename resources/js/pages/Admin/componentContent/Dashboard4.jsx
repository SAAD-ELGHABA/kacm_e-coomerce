import { ResponsiveChoropleth } from "@nivo/geo";
import React, { useEffect, useState } from 'react';
import { dataGeo } from "./world_countries";



const data = [
    {
        id: "AFG",
        value: 614797,
    },
    {
        id: "AGO",
        value: 94385,
    },
    {
        id: "ALB",
        value: 840321,
    },
    {
        id: "ARE",
        value: 80048,
    },
    {
        id: "ARG",
        value: 906739,
    },
    {
        id: "ARM",
        value: 621898,
    },
    {
        id: "ATA",
        value: 492615,
    },
    {
        id: "ATF",
        value: 734059,
    },
    {
        id: "AUT",
        value: 835338,
    },
    {
        id: "AZE",
        value: 789268,
    },
    {
        id: "BDI",
        value: 696277,
    },
    {
        id: "BEL",
        value: 512093,
    },
    {
        id: "BEN",
        value: 982357,
    },
    {
        id: "BFA",
        value: 12379,
    },
    {
        id: "BGD",
        value: 165952,
    },
    {
        id: "BGR",
        value: 573102,
    },
    {
        id: "BHS",
        value: 503213,
    },
    {
        id: "BIH",
        value: 63443,
    },
    {
        id: "BLR",
        value: 415156,
    },
    {
        id: "BLZ",
        value: 581954,
    },
    {
        id: "BOL",
        value: 532592,
    },
    {
        id: "BRN",
        value: 390568,
    },
    {
        id: "BTN",
        value: 268728,
    },
    {
        id: "BWA",
        value: 887141,
    },
    {
        id: "CAF",
        value: 808641,
    },
    {
        id: "CAN",
        value: 397187,
    },
    {
        id: "CHE",
        value: 456232,
    },
    {
        id: "CHL",
        value: 253795,
    },
    {
        id: "CHN",
        value: 83807,
    },
    {
        id: "CIV",
        value: 286816,
    },
    {
        id: "CMR",
        value: 876260,
    },
    {
        id: "COG",
        value: 651314,
    },
    {
        id: "COL",
        value: 550972,
    },
    {
        id: "CRI",
        value: 995422,
    },
    {
        id: "CUB",
        value: 38466,
    },
    {
        id: "-99",
        value: 457989,
    },
    {
        id: "CYP",
        value: 273000,
    },
    {
        id: "CZE",
        value: 689072,
    },
    {
        id: "DEU",
        value: 465719,
    },
    {
        id: "DJI",
        value: 734764,
    },
    {
        id: "DNK",
        value: 845355,
    },
    {
        id: "DOM",
        value: 708094,
    },
    {
        id: "DZA",
        value: 739427,
    },
    {
        id: "ECU",
        value: 762315,
    },
    {
        id: "EGY",
        value: 523538,
    },
    {
        id: "ERI",
        value: 954286,
    },
    {
        id: "ESP",
        value: 449490,
    },
    {
        id: "EST",
        value: 110016,
    },
    {
        id: "ETH",
        value: 281699,
    },
    {
        id: "FIN",
        value: 45829,
    },
    {
        id: "FJI",
        value: 227450,
    },
    {
        id: "FLK",
        value: 437588,
    },
    {
        id: "FRA",
        value: 907065,
    },
    {
        id: "GAB",
        value: 286596,
    },
    {
        id: "GBR",
        value: 149402,
    },
    {
        id: "GEO",
        value: 227762,
    },
    {
        id: "GHA",
        value: 440446,
    },
    {
        id: "GIN",
        value: 197723,
    },
    {
        id: "GMB",
        value: 569080,
    },
    {
        id: "GNB",
        value: 176020,
    },
    {
        id: "GNQ",
        value: 878532,
    },
    {
        id: "GRC",
        value: 92579,
    },
    {
        id: "GTM",
        value: 630111,
    },
    {
        id: "GUY",
        value: 714823,
    },
    {
        id: "HND",
        value: 684317,
    },
    {
        id: "HRV",
        value: 25547,
    },
    {
        id: "HTI",
        value: 763636,
    },
    {
        id: "HUN",
        value: 744520,
    },
    {
        id: "IDN",
        value: 558661,
    },
    {
        id: "IND",
        value: 531045,
    },
    {
        id: "IRL",
        value: 751827,
    },
    {
        id: "IRN",
        value: 992711,
    },
    {
        id: "IRQ",
        value: 422843,
    },
    {
        id: "ISL",
        value: 938412,
    },
    {
        id: "ISR",
        value: 622141,
    },
    {
        id: "ITA",
        value: 337687,
    },
    {
        id: "JAM",
        value: 431658,
    },
    {
        id: "JOR",
        value: 9653,
    },
    {
        id: "JPN",
        value: 259373,
    },
    {
        id: "KAZ",
        value: 747093,
    },
    {
        id: "KEN",
        value: 352698,
    },
    {
        id: "KGZ",
        value: 767854,
    },
    {
        id: "KHM",
        value: 441597,
    },
    {
        id: "OSA",
        value: 881734,
    },
    {
        id: "KWT",
        value: 259356,
    },
    {
        id: "LAO",
        value: 402105,
    },
    {
        id: "LBN",
        value: 847424,
    },
    {
        id: "LBR",
        value: 518284,
    },
    {
        id: "LBY",
        value: 613936,
    },
    {
        id: "LKA",
        value: 894581,
    },
    {
        id: "LSO",
        value: 201347,
    },
    {
        id: "LTU",
        value: 5941,
    },
    {
        id: "LUX",
        value: 596550,
    },
    {
        id: "LVA",
        value: 367493,
    },
    {
        id: "MAR",
        value: 464385,
    },
    {
        id: "MDA",
        value: 310975,
    },
    {
        id: "MDG",
        value: 875828,
    },
    {
        id: "MEX",
        value: 933770,
    },
    {
        id: "MKD",
        value: 386344,
    },
    {
        id: "MLI",
        value: 339391,
    },
    {
        id: "MMR",
        value: 892944,
    },
    {
        id: "MNE",
        value: 823767,
    },
    {
        id: "MNG",
        value: 518776,
    },
    {
        id: "MOZ",
        value: 280798,
    },
    {
        id: "MRT",
        value: 838902,
    },
    {
        id: "MWI",
        value: 318163,
    },
    {
        id: "MYS",
        value: 844410,
    },
    {
        id: "NAM",
        value: 232735,
    },
    {
        id: "NCL",
        value: 555969,
    },
    {
        id: "NER",
        value: 652438,
    },
    {
        id: "NGA",
        value: 998784,
    },
    {
        id: "NIC",
        value: 376659,
    },
    {
        id: "NLD",
        value: 304227,
    },
    {
        id: "NOR",
        value: 494345,
    },
    {
        id: "NPL",
        value: 919714,
    },
    {
        id: "NZL",
        value: 567274,
    },
    {
        id: "OMN",
        value: 696458,
    },
    {
        id: "PAK",
        value: 479134,
    },
    {
        id: "PAN",
        value: 449545,
    },
    {
        id: "PER",
        value: 819740,
    },
    {
        id: "PHL",
        value: 652856,
    },
    {
        id: "PNG",
        value: 362482,
    },
    {
        id: "POL",
        value: 153980,
    },
    {
        id: "PRI",
        value: 622578,
    },
    {
        id: "PRT",
        value: 970199,
    },
    {
        id: "PRY",
        value: 454028,
    },
    {
        id: "QAT",
        value: 407960,
    },
    {
        id: "ROU",
        value: 231691,
    },
    {
        id: "RUS",
        value: 686680,
    },
    {
        id: "RWA",
        value: 997927,
    },
    {
        id: "ESH",
        value: 592072,
    },
    {
        id: "SAU",
        value: 350566,
    },
    {
        id: "SDN",
        value: 206125,
    },
    {
        id: "SDS",
        value: 570186,
    },
    {
        id: "SEN",
        value: 3804,
    },
    {
        id: "SLB",
        value: 941114,
    },
    {
        id: "SLE",
        value: 89673,
    },
    {
        id: "SLV",
        value: 647657,
    },
    {
        id: "ABV",
        value: 318754,
    },
    {
        id: "SOM",
        value: 36480,
    },
    {
        id: "SRB",
        value: 338815,
    },
    {
        id: "SUR",
        value: 747261,
    },
    {
        id: "SVK",
        value: 90963,
    },
    {
        id: "SVN",
        value: 94678,
    },
    {
        id: "SWZ",
        value: 23600,
    },
    {
        id: "SYR",
        value: 975006,
    },
    {
        id: "TCD",
        value: 461052,
    },
    {
        id: "TGO",
        value: 16879,
    },
    {
        id: "THA",
        value: 779100,
    },
    {
        id: "TJK",
        value: 125966,
    },
    {
        id: "TKM",
        value: 472303,
    },
    {
        id: "TLS",
        value: 562038,
    },
    {
        id: "TTO",
        value: 62678,
    },
    {
        id: "TUN",
        value: 805019,
    },
    {
        id: "TUR",
        value: 943043,
    },
    {
        id: "TWN",
        value: 105935,
    },
    {
        id: "TZA",
        value: 152245,
    },
    {
        id: "UGA",
        value: 432159,
    },
    {
        id: "UKR",
        value: 981309,
    },
    {
        id: "URY",
        value: 814605,
    },
    {
        id: "USA",
        value: 871941,
    },
    {
        id: "UZB",
        value: 524702,
    },
    {
        id: "VEN",
        value: 608280,
    },
    {
        id: "VNM",
        value: 258774,
    },
    {
        id: "VUT",
        value: 668684,
    },
    {
        id: "PSE",
        value: 371298,
    },
    {
        id: "YEM",
        value: 12607,
    },
    {
        id: "ZAF",
        value: 856658,
    },
    {
        id: "ZMB",
        value: 362754,
    },
    {
        id: "ZWE",
        value: 610605,
    },
    {
        id: "KOR",
        value: 35028,
    },
];


const Dashboard4 = () => {

    return(
    <div style={{height:"75vh"}}>
        <ResponsiveChoropleth
            data={data}
            features= {dataGeo.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors="nivo"
            domain={[ 0, 1000000 ]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionTranslation={[ 0.5, 0.5 ]}
            projectionRotation={[ 0, 0, 0 ]}
            enableGraticule={true}
            graticuleLineColor="#dddddd"
            borderWidth={0.5}
            borderColor="#152538"
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                },
                {
                    id: 'gradient',
                    type: 'linearGradient',
                    colors: [
                        {
                            offset: 0,
                            color: '#000'
                        },
                        {
                            offset: 100,
                            color: 'inherit'
                        }
                    ]
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'CAN'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'CHN'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'ATA'
                    },
                    id: 'gradient'
                }
            ]}
            legends={[
                {
                    anchor: 'bottom-left',
                    direction: 'column',
                    justify: true,
                    translateX: 20,
                    translateY: -100,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: 'left-to-right',
                    itemTextColor: '#444444',
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000000',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    </div>
    )

}

export default Dashboard4;
