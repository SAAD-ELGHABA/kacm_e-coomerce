import React from "react";
import { ResponsiveBar } from "@nivo/bar";


const data = [
    {
        country: "AD",
        "hot dog": 131,
        "hot dogColor": "hsl(349, 70%, 50%)",
        burger: 200,
        burgerColor: "hsl(276, 70%, 50%)",
        sandwich: 182,
        sandwichColor: "hsl(85, 70%, 50%)",
        kebab: 148,
        kebabColor: "hsl(15, 70%, 50%)",
        fries: 153,
        friesColor: "hsl(324, 70%, 50%)",
        donut: 30,
        donutColor: "hsl(29, 70%, 50%)",
    },
    {
        country: "AE",
        "hot dog": 131,
        "hot dogColor": "hsl(145, 70%, 50%)",
        burger: 51,
        burgerColor: "hsl(229, 70%, 50%)",
        sandwich: 39,
        sandwichColor: "hsl(319, 70%, 50%)",
        kebab: 39,
        kebabColor: "hsl(296, 70%, 50%)",
        fries: 119,
        friesColor: "hsl(249, 70%, 50%)",
        donut: 199,
        donutColor: "hsl(90, 70%, 50%)",
    },
    {
        country: "AF",
        "hot dog": 41,
        "hot dogColor": "hsl(1, 70%, 50%)",
        burger: 35,
        burgerColor: "hsl(295, 70%, 50%)",
        sandwich: 176,
        sandwichColor: "hsl(328, 70%, 50%)",
        kebab: 135,
        kebabColor: "hsl(246, 70%, 50%)",
        fries: 112,
        friesColor: "hsl(74, 70%, 50%)",
        donut: 19,
        donutColor: "hsl(151, 70%, 50%)",
    },
    {
        country: "AG",
        "hot dog": 123,
        "hot dogColor": "hsl(95, 70%, 50%)",
        burger: 59,
        burgerColor: "hsl(153, 70%, 50%)",
        sandwich: 159,
        sandwichColor: "hsl(127, 70%, 50%)",
        kebab: 72,
        kebabColor: "hsl(253, 70%, 50%)",
        fries: 74,
        friesColor: "hsl(150, 70%, 50%)",
        donut: 29,
        donutColor: "hsl(307, 70%, 50%)",
    },
    {
        country: "AI",
        "hot dog": 184,
        "hot dogColor": "hsl(26, 70%, 50%)",
        burger: 68,
        burgerColor: "hsl(357, 70%, 50%)",
        sandwich: 144,
        sandwichColor: "hsl(13, 70%, 50%)",
        kebab: 140,
        kebabColor: "hsl(196, 70%, 50%)",
        fries: 119,
        friesColor: "hsl(180, 70%, 50%)",
        donut: 114,
        donutColor: "hsl(317, 70%, 50%)",
    },
    {
        country: "AL",
        "hot dog": 105,
        "hot dogColor": "hsl(179, 70%, 50%)",
        burger: 107,
        burgerColor: "hsl(115, 70%, 50%)",
        sandwich: 22,
        sandwichColor: "hsl(11, 70%, 50%)",
        kebab: 164,
        kebabColor: "hsl(186, 70%, 50%)",
        fries: 75,
        friesColor: "hsl(219, 70%, 50%)",
        donut: 160,
        donutColor: "hsl(158, 70%, 50%)",
    },
    {
        country: "AM",
        "hot dog": 106,
        "hot dogColor": "hsl(105, 70%, 50%)",
        burger: 67,
        burgerColor: "hsl(157, 70%, 50%)",
        sandwich: 39,
        sandwichColor: "hsl(29, 70%, 50%)",
        kebab: 192,
        kebabColor: "hsl(334, 70%, 50%)",
        fries: 114,
        friesColor: "hsl(198, 70%, 50%)",
        donut: 105,
        donutColor: "hsl(101, 70%, 50%)",
    },
];
// function dashboard1() {
//     return (
//         <div style={{ height: "510px" }}>
            const Dashboard1 = () => {
              return (
                <div style={{ height: '75vh' }} >
                  <ResponsiveBar
                    data={data}
                    keys={[
                      "hot dog",
                      "burger",
                      "sandwich",
                      "kebab",
                      "fries",
                      "donut",
                    ]}
                    indexBy="country"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: "linear" }}
                    indexScale={{ type: "band", round: true }}
                    colors={{ scheme: "nivo" }}
                    defs={[
                      {
                        id: "dots",
                        type: "patternDots",
                        background: "inherit",
                        color: "#38bcb2",
                        size: 4,
                        padding: 1,
                        stagger: true,
                      },
                      {
                        id: "lines",
                        type: "patternLines",
                        background: "inherit",
                        color: "#eed312",
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10,
                      },
                    ]}
                    fill={[
                      {
                        match: {
                          id: "fries",
                        },
                        id: "dots",
                      },
                      {
                        match: {
                          id: "sandwich",
                        },
                        id: "lines",
                      },
                    ]}
                    borderColor={{
                      from: "color",
                      modifiers: [["darker", 1.6]],
                    }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "country",
                      legendPosition: "middle",
                      legendOffset: 32,
                      truncateTickAt: 0,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "food",
                      legendPosition: "middle",
                      legendOffset: -40,
                      truncateTickAt: 0,
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{
                      from: "color",
                      modifiers: [["darker", 1.6]],
                    }}
                    legends={[
                      {
                        dataFrom: "keys",
                        anchor: "bottom-right",
                        direction: "column",
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: "left-to-right",
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                          {
                            on: "hover",
                            style: {
                              itemOpacity: 1,
                            },
                          },
                        ],
                      },
                    ]}
                    role="application"
                    ariaLabel="Nivo bar chart demo"
                    barAriaLabel={(e) => e.id +
                      ": " +
                      e.formattedValue +
                      " in country: " +
                      e.indexValue} />
                </div>
              );
            }
//         </div>
//     );
// }

// export default dashboard1;
export default Dashboard1;
