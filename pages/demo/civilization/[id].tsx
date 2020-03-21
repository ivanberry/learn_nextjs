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
const Detail = ({ c }: IProps) => {
  return <CivilizationDetail {...c} />;
};

export async function getStaticPaths() {
  const URL = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';

  const res = await axios.get(URL);
  const { civilizations } = res.data;

  const paths = civilizations.map(
    (c: ICivilizationProps) => `/demo/civilization/${c.id}`
  );

  return {
    paths,
    fallback: false
  };
}

// 当前页面获取详情
export async function getStaticProps({ params }: any) {
  const URL = `https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${params.id}`;

  const res = await axios.get(URL);

  return {
    props: {
      c: res.data
    }
  };
}

export default Detail;
