import { Grid } from '@material-ui/core';
import React from 'react';

export interface ICivilizationProps {
  id: number;
  name: string;
  expansion: string;
  army_type: string;
  unique_unit: Array<string>;
  unique_tech: Array<string>;
}
const CivilizationDetail = (item: ICivilizationProps) => {
  return (
    <Grid item xs={12} md={6} lg={3}>
      <h1>{item.name}</h1>
      <p>{item.expansion}</p>
    </Grid>
  );
};

export default CivilizationDetail;
