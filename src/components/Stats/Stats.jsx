import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import DetailsCard from "../Details/Details";
import List from "./List/List";

import useStyles from "../../styles";
import { ExpenseTrackerContext } from "../../context/context";
import DetailsCard2 from "../Profile/Details/Details";
import useTransactionsYear from "../../useTransactionsYear";
// const selectedYears = [
//   "2010",
//   "2011",
//   "2012",
//   "2013",
//   "2014",
//   "2015",
//   "2016",
//   "2017",
//   "2018",
//   "2019",
// ];
const Stats = () => {
  const [year, setYear] = useState(2010);

  const classes = useStyles();
  const { balance, yearsArray, averageExpense } = useTransactionsYear(
    "Income",
    year
  );

  const {} = useContext(ExpenseTrackerContext);
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-6 mt-5 text-center">
          <FormControl fullWidth>
            <InputLabel>Year</InputLabel>
            <Select
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            >
              {yearsArray.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="col-md-6 mt-5">
          <h3>
            Total Balance in Hand for {year} is ₹{balance}.
          </h3>
          <h3>
            Average Expense for year {year} is ₹{averageExpense}.
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mt-5">
          <h3>Statistical Graphs for {year}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <DetailsCard2 year={year} title="Income" />
        </div>
        <div className="col-md-6">
          <DetailsCard2 year={year} title="Expense" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mt-5">
          <h3>All Expenses for {year}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <List year={year}></List>
        </div>
      </div>
    </div>
  );
};

export default Stats;
