

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useTable } from "react-table";
import { useDispatch, useSelector } from "react-redux";
import { updateDeliverable } from "redux/slice/deliverablesSlice";
import styles from "./index.module.scss";

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateData,
  type,
}) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    if (value !== initialValue) {
      updateData(index, id, value);
    }
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);


  if (type === "dropdown") {
    return (
      <select
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className=" customSelect"
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    );
  }

  if (type === "date") {
    return (
      <input
        type="date"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="custom-date"
      />
    );
  }

  return <input value={value} onChange={onChange} onBlur={onBlur} />;
};

const DeliverablesTable = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.deliverables);

  const updateData = useCallback(
    (rowIndex, columnId, value) => {
      const deliverableId = data[rowIndex].deliverableId;
      console.log(
        `Dispatching update for row ${rowIndex}, column ${columnId} with value ${value}`
      );
      dispatch(
        updateDeliverable({ id: deliverableId, field: columnId, value })
      );
    },
    [dispatch, data]
  );

  const columns = useMemo(
    () => [
      { Header: "Deliverable ID", accessor: "deliverableId" },
      {
        Header: "Deliverables",
        accessor: "deliverables",
        Cell: (props) => (
          <EditableCell {...props} updateData={updateData} type="text" />
        ),
      },
      {
        Header: "Deliverable Name",
        accessor: "deliverableName",
        Cell: (props) => (
          <EditableCell {...props} updateData={updateData} type="text" />
        ),
      },
      {
        Header: "Final Creator Price",
        accessor: "finalCreatorPrice",
        Cell: (props) => (
          <EditableCell {...props} updateData={updateData} type="text" />
        ),
      },
      {
        Header: "Final Brand Price",
        accessor: "finalBrandPrice",
        Cell: (props) => (
          <EditableCell {...props} updateData={updateData} type="text" />
        ),
      },
      {
        Header: "Deliverable Approved",
        accessor: "deliverableApproved",
        Cell: (props) => (
          <EditableCell {...props} updateData={updateData} type="dropdown" />
        ),
      },
      {
        Header: "Expected Go Live Date",
        accessor: "expectedGoLiveDate",
        Cell: (props) => (
          <EditableCell {...props} updateData={updateData} type="date" />
        ),
      },
      {
        Header: "Content Published",
        accessor: "contentPublished",
        Cell: (props) => (
          <EditableCell {...props} updateData={updateData} type="dropdown" />
        ),
      },
      {
        Header: "Post Link",
        accessor: "postLink",
        Cell: (props) => (
          <EditableCell {...props} updateData={updateData} type="text" />
        ),
      },
    ],
    [updateData]
  );

  console.log("DeliverablesTable Data:", data);
  console.log("DeliverablesTable Columns:", columns);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className={styles.table}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DeliverablesTable;
