import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, Legend,
  PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const data = [
  {subject: 'Centros',                 B: 40, C: 0,  D: 0, E:50, fullMark: 150, },
  {subject: 'Empresas sem refeitório', B: 150,  C: 30,  D: 20,  E:0, fullMark: 150, },
  {subject: 'Praças',                  B: 90,  C: 150,  D: 70,    E:0, fullMark: 150, },
  {subject: 'Faculdades',              B: 40,  C: 130,  D: 150,  E:0, fullMark: 150, },
  {subject: 'Shoppings',               B: 20, C: 0,  D: 130,   E:150, fullMark: 150, },
  {subject: 'Construções civis',       B: 80, C: 20, D: 0,   E:130, fullMark: 150, },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/dpgb3xjq/';

  render() {
    return (
      <RadarChart cx={300} cy={250} outerRadius={150} width={1800} height={600} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar name="liviagabrielamonteiro@viamoc.com.br" dataKey="B" stroke="#EDF621" fill="#EDF621" fillOpacity={0.7} />
        <Radar name="eliasviniciusvicentefigueiredo@solarisbrasil.com.br" dataKey="C" stroke="#F6219F" fill="#F6219F" fillOpacity={0.5} />
        <Radar name="j.otaviomorais@gmail.com" dataKey="D" stroke="#0BE91B" fill="#0BE91B" fillOpacity={0.6} />
        <Radar name= "fitfood@gmail.com"  dataKey="E" stroke="#21C2F7" fill="#21C2F7" fillOpacity={0.7} />
        <Legend />
      </RadarChart>
    );
  }
}
