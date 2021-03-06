import { Grid, Container } from '@material-ui/core';
import React from 'react';
import axios from 'axios';
import CivilizationDetail, {
  ICivilizationProps
} from '../../components/civilizationDetail';

interface IProps {
  civilizations: Array<ICivilizationProps>;
}

const Index = ({ civilizations }: IProps) => {
  return (
    <Container fixed>
      <Grid container spacing={3}>
        {civilizations!.map(c => (
          <CivilizationDetail key={c.id} {...c} />
        ))}
      </Grid>
    </Container>
  );
};

export async function getStaticProps() {
  const URL = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';

  const res = await axios.get(URL);

  return {
    props: {
      civilizations: res.data.civilizations
    }
  };
}

export default Index;
