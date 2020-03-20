import { Grid, Container } from '@material-ui/core';
import React from 'react';
import axios from 'axios';

interface IProps {
  user: object;
}

const Index = ({ user }: IProps) => {
  return (
    <Container fixed>
      <Grid container>
        <Grid item>
          <h1>依赖外部数据</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
            deleniti, facere illum incidunt laborum maiores mollitia nam natus
            praesentium quam repudiandae temporibus, velit voluptatibus. Atque
            nesciunt nostrum possimus reiciendis vero.
          </p>
        </Grid>
      </Grid>
    </Container>
  );
};

export async function getStaticProps() {
  const token = 'Yi2s_eZHNBskjfJktMQWdQ';
  const URL = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';
  const playload = {
    token,
    data: {
      name: 'nameFirst',
      email: 'internetEmail',
      phone: 'phoneHome',
      _repeat: 300
    }
  };

  const res = await axios.get(URL);

  return {
    props: {
      user: res.data
    }
  };
}

export default Index;
