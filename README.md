date: 13/09/2016
author: Aleksandra Ejchman-Luśnia
project title: Dashboard Panels
---------------------
using technologies: 
	* HTML
	* CSS
	* SVG
	* JavaScript
	* JSON data

using libraries:
	* Chartist.js

using plugins:
	* Chartist-plugin-legend 

---------------------

This project was made with the use of basic front-end technologies: HTML, CSS, JavaScript. The data that are displayed on charts were loaded in JSON data format. This format was chosen because of its versatility and intuitive syntax. HTML and CSS languages were used to create the panels where charts were placed. JavaScript was used to construct the chart. 

The content of every frame was structured using CSS flex property.
The both icons (dollar and arrow) were developed with no use of images. The dollar icon was created using different font than those of the entire project. The arrow icon was created using the CSS attribute: border. By pseudo-element (::before, ::after) it was possible to add more than one border to icon. 

The main issue of this project was the use of appropriate JS library. After small research I followed Chartist.js library. First, I chose d3.js library due to its popularity, but because I'm just begginer in JavaScript I decided to use Chartist.js, which have lot of easy-to-use functions. 
Each created graph has options by which we can define its properties. However, I had to created few more functions: drawing axis without grid lines, drawing points with circle outline, drawing tick marks. I also used non-official plugin (developed by Chartist.js author) which draws area between two series line. All these functions use SVG technology. SVG objects are easy to define and may be scalling without loss of quality. Its big advantage if such a graph will be displayed in RWD technolo 

To the project I also added Chartist plugin-legend. I used it's main function : displaying a chart legend based on the series names. 