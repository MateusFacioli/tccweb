import React, {PureComponent} from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import Pie from '../components/Pie';
import Radar from '../components/Radar';

const data  = [
  {name: 'liviagabrielamonteiro@viamoc.com.br', total_vendas_R$: 7.5, produtos: 5, amt: 3000},
  {name: 'eliasviniciusvicentefigueiredo@solarisbrasil.com.br', total_vendas_R$: 22, produtos: 6, amt: 4000},
  {name: 'j.otaviomorais@gmail.com', total_vendas_R$: 20, produtos: 2, amt:5000},
  {name: 'fitfood@gmail.com', total_vendas_R$: 82, produtos: 3, amt:6000},
];

class SimpleLineChart extends React.Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
  render () {
    return (
      <div className="graficos">
      <strong><p>Vendas por comerciante em R$</p></strong>
      <LineChart width={1500} height={300} data={data} margin={{top: 20, right: 20, left: 20, bottom: 30}}>
        <Line type='monotone'dataKey='total_vendas_R$'stroke='#000000'activeDot={{r: 8}} />
        <Line type='monotone'dataKey='produtos'stroke='#8884d8'activeDot={{r: 7}} />
        <CartesianGrid strokeDasharray='3 3'/>
        <XAxis dataKey='name'/>
        <YAxis/>
        <Tooltip/>
      <Legend />
      </LineChart>
      <strong><p>Lucro EasyMeal em R$</p></strong>
      <Pie/>
      <strong><p>Disposição de local por comerciante</p></strong>
      <Radar/>

      </div>
    );
  }
}

export default SimpleLineChart;