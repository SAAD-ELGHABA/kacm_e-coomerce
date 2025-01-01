import React, { useEffect, useState } from "react";
import { FaListAlt } from "react-icons/fa";
export default function Table({ handleDataTable }) {
    const [numrows, setNumrows] = useState(1);
    const [rows, setRows] = useState([""]);
    const [columns, setColumns] = useState(0);
    const [table, setTable] = useState([]);
    const [listStyle, setListStyle] = useState({
        key: null,
        togglelist: false,
    });
    const [tdData, setTdData] = useState({
        data: "",
        style: {
            color: "#000000",
            fontFamilly: "",
            fontSize: "12",
            fontWeight: "normal",
        },
    });
    const [tableData, setTableData] = useState([]);
    function handleGenerateTable(e) {
        e.preventDefault();
        setTdData({
            data: "",
            style: {
                color: "#000000",
                fontFamilly: "",
                fontSize: "",
                fontWeight: "normal",
            },
        });
        setTable([]);
        setTableData([]);
        setRows([""]);
        setTable(new Array(parseInt(columns)).fill(""));
        setRows(new Array(parseInt(numrows)).fill(""));
        const tableContainer = new Array(parseInt(numrows))
            .fill("")
            .map(() => new Array(parseInt(columns)).fill(""));
        setTableData(tableContainer);
    }

    function handleData(dataTd, RowIndex, ColIndex) {
        const updatedTable = [...tableData];
        setTdData({
            data: dataTd,
            style: {
                color: tdData.style.color,
                fontFamilly: tdData.style.fontFamilly,
                fontSize: tdData.style.fontSize,
                fontWeight: tdData.style.fontWeight,
            },
        });
        updatedTable[Number(parseInt(RowIndex))][Number(parseInt(ColIndex))] = {
            data: dataTd,
            style: {
                color: tdData.style.color,
                fontFamilly: tdData.style.fontFamilly,
                fontSize: tdData.style.fontSize,
                fontWeight: tdData.style.fontWeight,
            },
        };
        setTableData(updatedTable);
    }
    function handleListToggle(RowIndex, ColIndex) {
        const key = `${RowIndex}${ColIndex}`;
        setListStyle({ key: key, togglelist: !listStyle.togglelist });
    }
    function handleStyle(e, RowIndex, ColIndex) {
        e.preventDefault();
        const updatedTable = [...tableData];
        updatedTable[Number(parseInt(RowIndex))][
            Number(parseInt(ColIndex))
        ].style = {
            color: tdData.style.color,
            fontFamilly: tdData.style.fontFamilly,
            fontSize: tdData.style.fontSize,
            fontWeight: tdData.style.fontWeight,
        };
        setTableData(updatedTable);
        setListStyle({ key: null, togglelist: false });
    }
    function Savechanges(e) {
        e.preventDefault();
        const elementJson = {
            element: "table",
            dependencies: tableData,
        };
        handleDataTable(elementJson);
    }
    return (
        <div className="container my-2">
            <div className="row  gap-3 text-center my-2 d-flex justify-content-center">
                <input
                    type="number"
                    name=""
                    id=""
                    placeholder="Insert number of rows :"
                    className="w-25 form-control"
                    onChange={(e) => setNumrows(e.target.value)}
                />
                <input
                    type="number"
                    name=""
                    id=""
                    placeholder="Insert number of columns :"
                    className="w-25 form-control"
                    onChange={(e) => setColumns(e.target.value)}
                />
                <button
                    className="btn btn-secondary col-5"
                    onClick={handleGenerateTable}
                >
                    Generate Table
                </button>
            </div>
            {table.length > 0 && (
                <div
                    style={{ overflow: "hidden", overflowX: "scroll" }}
                    className="my-1 border border-secondary rounded"
                >
                    <table className="table table-bordered ">
                        {rows.map((item, RowIndex) => (
                            <tr key={RowIndex} className="border">
                                {table.map((item, ColIndex) => (
                                    <td
                                        key={ColIndex}
                                        className="border justify-content-between "
                                    >
                                        <input
                                            value={
                                                tableData[RowIndex][ColIndex]
                                                    .data
                                                    ? tableData[RowIndex][
                                                          ColIndex
                                                      ].data
                                                    : ""
                                            }
                                            style={{
                                                color: tableData[RowIndex][
                                                    ColIndex
                                                ].style
                                                    ? tableData[RowIndex][
                                                          ColIndex
                                                      ].style.color
                                                    : "",
                                                fontFamily: tableData[RowIndex][
                                                    ColIndex
                                                ].style
                                                    ? tableData[RowIndex][
                                                          ColIndex
                                                      ].style.fontFamilly
                                                    : "",
                                                fontSize: tableData[RowIndex][
                                                    ColIndex
                                                ].style
                                                    ? `${tableData[RowIndex][ColIndex].style.fontSize}px`
                                                    : "",
                                                fontWeight: tableData[RowIndex][
                                                    ColIndex
                                                ].style
                                                    ? tableData[RowIndex][
                                                          ColIndex
                                                      ].style.fontWeight
                                                    : "",
                                            }}
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="insert.."
                                            className="border rounded border-secondary inputs outline-none  bg-transparent w-100"
                                            onChange={(e) => {
                                                handleData(
                                                    e.target.value,
                                                    RowIndex,
                                                    ColIndex
                                                );
                                            }}
                                        />
                                        <div className="bg-transparent ">
                                            <FaListAlt
                                                className="text-light "
                                                style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                    handleListToggle(
                                                        RowIndex,
                                                        ColIndex
                                                    );
                                                }}
                                            />
                                            {listStyle.key ==
                                                `${RowIndex}${ColIndex}` &&
                                                listStyle.togglelist ==
                                                    true && (
                                                    <div className="ps-3 pe-3 pt-3 border rounded position-absolute bg-dark text-light ">
                                                        <ul
                                                            className="list-unstyled  "
                                                            style={{
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <li className="w-100 d-flex justify-content-between">
                                                                Color :{" "}
                                                                <input
                                                                    value={
                                                                        tdData
                                                                            .style
                                                                            .color
                                                                            ? tdData
                                                                                  .style
                                                                                  .color
                                                                            : "#000000"
                                                                    }
                                                                    className="border-none outline-none rounded inputs  w-25"
                                                                    type="color"
                                                                    name=""
                                                                    id=""
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setTdData(
                                                                            {
                                                                                ...tdData.style,
                                                                                style: {
                                                                                    ...tdData.style,
                                                                                    color: e
                                                                                        .target
                                                                                        .value,
                                                                                },
                                                                            }
                                                                        )
                                                                    }
                                                                />
                                                            </li>
                                                            <li className="w-100 d-flex justify-content-between">
                                                                Font Familly :{" "}
                                                                <input
                                                                    value={
                                                                        tdData
                                                                            .style
                                                                            .fontFamilly
                                                                            ? tdData
                                                                                  .style
                                                                                  .fontFamilly
                                                                            : ""
                                                                    }
                                                                    className="border-none outline-none rounded inputs ps-1 w-25"
                                                                    type="text"
                                                                    name=""
                                                                    id=""
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setTdData(
                                                                            {
                                                                                ...tdData.style,
                                                                                style: {
                                                                                    ...tdData.style,
                                                                                    fontFamilly:
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                },
                                                                            }
                                                                        )
                                                                    }
                                                                />
                                                            </li>
                                                            <li className="w-100 d-flex justify-content-between">
                                                                Font Size :{" "}
                                                                <input
                                                                    value={
                                                                        tdData
                                                                            .style
                                                                            .fontSize
                                                                            ? tdData
                                                                                  .style
                                                                                  .fontSize
                                                                            : ""
                                                                    }
                                                                    className="border-none outline-none rounded inputs ps-1 w-25"
                                                                    type="number"
                                                                    name=""
                                                                    id=""
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setTdData(
                                                                            {
                                                                                ...tdData.style,
                                                                                style: {
                                                                                    ...tdData.style,
                                                                                    fontSize:
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                },
                                                                            }
                                                                        )
                                                                    }
                                                                />
                                                            </li>
                                                            <li className="w-100 d-flex justify-content-between">
                                                                font weight :
                                                                <select
                                                                    value={
                                                                        tdData
                                                                            .style
                                                                            .fontWeight
                                                                            ? tdData
                                                                                  .style
                                                                                  .fontWeight
                                                                            : ""
                                                                    }
                                                                    name=""
                                                                    id=""
                                                                    className="border-none outline-none rounded inputs ps-1 w-25"
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setTdData(
                                                                            {
                                                                                ...tdData.style,
                                                                                style: {
                                                                                    ...tdData.style,
                                                                                    fontWeight:
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                },
                                                                            }
                                                                        )
                                                                    }
                                                                >
                                                                    <option value="300">
                                                                        thin
                                                                    </option>
                                                                    <option value="500">
                                                                        medium
                                                                    </option>
                                                                    <option value="700">
                                                                        semibold
                                                                    </option>
                                                                    <option value="900">
                                                                        bold
                                                                    </option>
                                                                </select>
                                                            </li>
                                                            <li className="w-100 d-flex justify-content-between mt-2 ">
                                                                <button
                                                                    className="btn btn-warning bg-gradient"
                                                                    onClick={() => {
                                                                        setTdData(
                                                                            {
                                                                                data: tdData.data,
                                                                                style: {
                                                                                    color: "#000000",
                                                                                    fontFamilly:
                                                                                        "",
                                                                                    fontSize:
                                                                                        "",
                                                                                    fontWeight:
                                                                                        "normal",
                                                                                },
                                                                            }
                                                                        );
                                                                        setListStyle(
                                                                            {
                                                                                key: null,
                                                                                togglelist: false,
                                                                            }
                                                                        );
                                                                    }}
                                                                >
                                                                    reset
                                                                    changes
                                                                </button>
                                                                <button
                                                                    className="btn btn-dark bg-gradient"
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        handleStyle(
                                                                            e,
                                                                            RowIndex,
                                                                            ColIndex
                                                                        )
                                                                    }
                                                                >
                                                                    save changes
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </table>
                    <button
                        className="btn btn-outline-success ms-2"
                        onClick={Savechanges}
                    >
                        save all changes
                    </button>
                </div>
            )}
        </div>
    );
}
