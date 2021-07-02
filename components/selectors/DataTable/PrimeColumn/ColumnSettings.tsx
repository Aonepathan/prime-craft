import React from 'react';

import { ToolbarSection, ToolbarItem } from '../../../editor';

export const ColumnSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection title="Data Table">
        <ToolbarItem
          full={true}
          propKey="header"
          type="text"
          label="Column Header"
        />
      </ToolbarSection>
    </React.Fragment>
  );
};
