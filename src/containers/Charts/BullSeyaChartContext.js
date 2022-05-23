import anychart from "anychart";

// set a series with the given properties
const createSeries = (seriesId, chart) => {
  const series = chart.marker();
  // the name for display is beautified
  const seriesName = seriesId;
  // set the size, name, id and color
  series.size(5).name(seriesName).id(seriesId);

  // configure the legend
  series.legendItem().iconType("circle").iconSize(10);

  return series;
};
// add a marker series with the given data
const addPoint = (item, chart) => {
  // the number of assets is a series id
  const seriesId = item["Asset"];
  // check if there is a series like we need
  var series = chart.getSeries(seriesId);
  // if there is no such series we create and configure it
  if (series == null) {
    series = createSeries(seriesId, chart);
  }
  // add the data into the series
  series
    .data()
    .getDataSets()[0]
    .append({
      x: item["Modalities"],
      y: item["Phase"],
      ...item,
    });
};

export const BullSeyaChartContext = (BullseyaData) => {
  let data = BullseyaData;
  var chart = anychart.polar();

  chart.innerRadius(80);
  chart.yScale("ordinal");
  chart.xScale("ordinal");

  // set the font size for labels
  chart.xAxis().labels().fontSize(12);

  // set a single marker type
  chart.markerPalette(["circle"]);

  // set the chart color palette
  chart.palette(["#f58032"]);

  data.forEach((vaccine) => addPoint(vaccine, chart));

  // spread bullets throughout a sector
  chart.spreadValues("valueEqual");
  let legend = chart.legend();
  legend.enabled(false);
  legend.position("right");
  legend.itemsLayout("vertical");
  legend.align("center");
  let title = chart.title();
  title.enabled(true);
  title.text("Bullseya Chart");
  title.align("left");

  chart.container("container");
  return chart.draw();
};
