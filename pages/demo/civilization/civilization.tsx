import { Grid, Container } from '@material-ui/core';
import React from 'react';
import axios from 'axios';
import CivilizationDetail, {
  ICivilizationProps
} from '../../../components/civilizationDetail';
import Link from 'next/link';

interface IProps {
  civilizations: Array<ICivilizationProps>;
}

/**
 * 某一大类的集合页面，需要依赖外部数据
 * @param civilizations
 * @constructor
 */
const Index = ({ civilizations }: IProps) => {
  return (
    <Container fixed>
      <Grid container spacing={3}>
        {civilizations!.map(c => (
          <Link key={c.id} href="/demo/civilization/[id]" as={`/demo/civilization/${c.id}`}>
            <Grid item >
              <h1>{c.name}</h1>
            </Grid>
          </Link>
        ))}
      </Grid>
    </Container>
  );
};

export default Index;

export async function getStaticProps() {
  const URL = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';

  const res = await axios.get(URL);

  return {
    props: {
      civilizations: res.data.civilizations
    }
  };
}
