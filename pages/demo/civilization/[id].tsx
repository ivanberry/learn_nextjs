import CivilizationDetail, {
  ICivilizationProps
} from '../../../components/civilizationDetail';
import React from 'react';
import axios from 'axios';

interface IProps {
  c: ICivilizationProps;
}

/**
 * 某种东西的详情页, 动态路由，依赖外部数据
 * 详情数据从React角度可以来自于父级，也可以是详情页自行获取
 * @param c
 * @constructor
 */
const Detail = ({c}: IProps) => {
  return <CivilizationDetail {...c} />;
};

export async function getStaticPaths() {
  const URL = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';

  const res = await axios.get(URL);
  const { civilizations } = res.data;

  const paths = civilizations.map((c: ICivilizationProps) => `/demo/civilization/${c.id}`);

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps() {
  const URL = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';

  const res = await axios.get(URL);
  const {civilizations} = res.data;

  return {
    props: {
      c: civilizations
    }
  };
}

export default Detail;
