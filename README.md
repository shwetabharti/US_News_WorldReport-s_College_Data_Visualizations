# US_News_WorldReport-s_College_Data_Visualizations
U.S. News and World Report's College Data Visualization using D3.js

# THE DATASET
The dataset titled U.S. News and World Report's College Data enlists the statistics for a large number of US Colleges from the 1995 issue of US News and World Report. The dataset was used in the ASA Statistical Graphics Section's 1995 Data Analysis Exposition. It has 777 observations on the 18 variables. Out of these 18 variables, 10 variables are picked that have highest variance and are numerical in nature for the bar charts and pie charts. For force-directed layout, a json file has been created manually that first classify the universities in “Public” and “Private” category and then group together the universities with same starting letter in their name. The dataset can be found at this URL: https://vincentarelbundock.github.io/Rdatasets/doc/ISLR/College.html

# FUNCTIONALITIES
The program provides three basic functionalities of representing full data in the form of bar chart and pie chart, and a subset of data in the form of force directed layout.

## I. For Bar Chart and Pie Chart
a. The program has a menu that allows the user to choose from above mentioned 10 variables using radio buttons to view its bar chart.
b. Upon selecting the variable, user can increase and decrease the number of bins and eventually bin size of the bar chart using a slider.
c. User can view the value of the bar by hovering the mouse over the bar which also highlights the bar.
d. To vie the pie hart for selected bin size, user can click on the bar chart. To come back to the bar chart, user can click on the pie chart. Basically, user can toggle between bar chart and pie chart with mouse click.
e. In pie chart functionality, user can hover his mouse over the pie chart slices to see their corresponding value.

## II. For Force Directed Layout
There is no obvious relationship between the variables and data points in the original dataset, hence a small subset is formed manually in the form of a json file. For force directed layout, two distance are chosen as explained below.
a. There are two higher level nodes – Public and Private which identify the university being public or private. All the private university nodes are linked to this “Private” node with a weight of 3 units. Similarly, all the public university nodes are linked to the “Public” node with a weight of 3 units.
b. All the nodes except “Public” and “Private” nodes, represent various universities from the dataset. The universities which have same first letter in their names are been put in the same group, hence they have same color nodes. Also, since they have same first letter in their name, they are connected together with the edge weight of 2.
Note: Force Directed Layout was made with a major help from: https://bl.ocks.org/heybignick/3faf257bbbbc7743bb72310d03b86ee8
