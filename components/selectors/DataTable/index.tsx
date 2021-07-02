import { UserComponent, useNode, Element } from '@craftjs/core';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import React from 'react';
import { ReactDOM } from 'react';

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

export const PrimeDataTable = (props: any) => {
    const {
        connectors: { connect },
      } = useNode((node) => ({
        selected: node.events.selected,
      }));

    const { value, header } = props;
    return (
        // <div>
            // <Element is="div" className="card" canvas id="someDiv">
                <DataTable value={data.data}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                    <PrimeColumn />
                </DataTable>
            // </Element>
        // </div>
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