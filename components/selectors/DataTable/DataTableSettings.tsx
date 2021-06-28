import React from 'react';

import { ToolbarSection, ToolbarItem } from '../../editor';

export const DataTableSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection title="Data Table">
        <ToolbarItem
          full={true}
          propKey="value"
          type="text"
          label="Table Data"
        />
      </ToolbarSection>
    </React.Fragment>
  );
};
