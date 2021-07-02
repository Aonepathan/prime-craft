import { useNode, useEditor } from '@craftjs/core';
import { Column } from 'primereact/column';
import React from 'react';
import { ReactDOM } from 'react';
import ContentEditable from 'react-contenteditable';
import { ColumnSettings } from '../PrimeColumn/ColumnSettings';

export type ColumnProps = {
    field: string;
    header: string;
}
// {field,header}: Partial<ColumnProps>
export const PrimeColumn = (props: any) => {
    const { connectors: { connect, drag }, setProp,} = useNode();
    // const { enabled } = useEditor((state) => ({
    //     enabled: state.options.enabled,
    //   }));
      return (
        <Column
          {...props}
          //ref={dom => connect(drag(dom))}
          field="code"
          header="Code"
        ></Column>
      );
};

PrimeColumn.craft = {
    displayName: 'Prime Column',
    props: {
        field: 'fieldName',
        header: 'Ex Column Name'
    },
    related: {
      toolbar: ColumnSettings,
    }
}