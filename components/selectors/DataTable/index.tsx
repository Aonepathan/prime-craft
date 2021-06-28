import { UserComponent, useNode } from '@craftjs/core';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import React, { Component } from 'react';

import { DataTable, DataTableProps } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { PrimeColumn } from './PrimeColumn';
import data from './products';
import { DataTableSettings } from './DataTableSettings';

type TableProps = {
    value?: any;
    columnComponent?: any;
}

type ColumnProps = {

}



export const PrimeDataTable = (props: DataTableProps) => {

    const {
        connectors: { connect },
      } = useNode((node) => ({
        selected: node.events.selected,
      }));

    const { value } = props;
    return (
        <div>
            <div className="card">
                <DataTable value={data.data}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                    {/* <PrimeColumn {...columnComponent} /> */}
                </DataTable>
            </div>
        </div>
    );
}

PrimeDataTable.craft = {
displayName: 'Prime Data Table',
  props: {
      value: [
        {"id": "9999","code": "letsgo","name": "Example Field","description": "Product Description","image": "bamboo-watch.jpg","price": 65,"category": "Accessories","quantity": 24,"inventoryStatus": "INSTOCK","rating": 5},
      ]
  },
  related: {
    toolbar: DataTableSettings,
  },
};