// alert("JS is being loaded")

import * as d3 from 'd3';

const datos = [10, 8, 6, 4, 2];
const media = d3.mean(datos);
console.log(`la media es ${media}`)