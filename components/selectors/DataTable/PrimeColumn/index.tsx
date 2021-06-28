import { useNode, useEditor } from '@craftjs/core';
import { Column } from 'primereact/column';
import React from 'react';
import ContentEditable from 'react-contenteditable';

export type ColumnProps = {
    field: string;
    header: string;
}

export const PrimeColumn = ({ field,header}: Partial<ColumnProps>) => {
    const { connectors: { connect }, setProp,} = useNode();
    const { enabled } = useEditor((state) => ({
        enabled: state.options.enabled,
      }));
      return (
        <Column
        //   ref={connect}
          field={field}
          header={header}
        ></Column>
      );
};

PrimeColumn.craft = {
    displayName: 'Prime Column',
    props: {
        field: 'fieldName',
        header: 'Ex Column Name'
    }
}