// src/components/filter.
import React, { useMemo } from "react"
import PropTypes from "prop-types"

//import components
import Breadcrumbs from "../../components/Common/Breadcrumb"
import TableContainer from "../../components/Common/TableContainer"

function WithdrawSummary() {
  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Withdraw",
        accessor: "withdraw",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  )

  const data = [
    {
      date: "12/04/2020",
      withdraw: "12987",
      type: "income",
      status: "pending",
    },
    {
      date: "12/04/2020",
      withdraw: "100",
      type: "income",
      status: "complete",
    },
    {
      date: "12/04/2020",
      withdraw: "200",
      type: "income",
      status: "pending",
    },
    {
      date: "12/04/2020",
      withdraw: "300",
      type: "income",
      status: "complete",
    },
    {
      date: "12/04/2020",
      withdraw: "500",
      type: "income",
      status: "hint",
    },
    {
      date: "12/04/2020",
      withdraw: "12987",
      type: "income",
      status: "vishal",
    },
    {
      date: "12/04/2020",
      withdraw: "20000",
      type: "income",
      status: "sush",
    },
  ]

  //meta title
  document.title = "Withdraw History| Nafeu project "

  return (
    <div className="page-content">
      <div className="container-fluid">
        <Breadcrumbs title="Withdraw  " breadcrumbItem="Withdraw History" />
        {/* <Table columns={columns} data={data} /> */}
        <TableContainer
          columns={columns}
          data={data}
          isGlobalFilter={true}
          isAddOptions={false}
          customPageSize={10}
          className="custom-header-css"
        />
      </div>
    </div>
  )
}
WithdrawSummary.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
}

export default WithdrawSummary
