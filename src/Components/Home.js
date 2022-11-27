import React, { useEffect, useState } from 'react';
import APIInterface from '../Hooks/APIInterface';
import './HomeStyles.css'
import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn, GridSortChangeEvent } from "@progress/kendo-react-grid";
import people from "../Data/people.json";
import { orderBy, SortDescriptor } from "@progress/kendo-data-query";
import Modal from '../Components/Modal';


const initialSort: Array<SortDescriptor> = [
  { field: "Name", dir: "asc" },
];



const Home = () =>
{
    const { GetPersonList } = APIInterface();
    const [sort, setSort] = React.useState(initialSort);
    const [modal, setModal]=useState(false);
    const [selectedPerson, setSelectedPerson]=useState(null);

    var PersonList;
    useEffect(() => {
        (async () => {
            PersonList = await GetPersonList();
        })();
    }, []);

    const toggleModal = (dataItem) => {
      setModal(!modal);
      setSelectedPerson(dataItem);
    }

    const ButtonInfo = (props) => {
      return (
          <button className={props.dataItem[props.field] !== 1 ? "hidden" : undefined }
              onClick={() => toggleModal(props.dataItem)}>
              <img src="./info.png" alt="temp" />
          </button>
      )
    }

    return (
      <div>
        {modal && (<Modal person={selectedPerson} />)}

        <Grid style={{
            height: "400px",
        }} data={orderBy(people, sort)}
        sortable={true}
        sort={sort}
        onSortChange={(e: GridSortChangeEvent) => {
          setSort(e.sort);
        }}>
              <GridColumn field="ID" title="ID" width="40px" />
              <GridColumn field="Name" title="Name" width="250px" />
              <GridColumn field="Age" title="Age" />
              <GridColumn field="PersonTypeID" title="Type" />
              <GridColumn field="PersonTypeID" title="Action" cell={ButtonInfo} />
          </Grid>
          </div>
        );
      
}

export default Home