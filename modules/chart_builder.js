import { initGraph } from "./init.js";
import { config } from "./config.js"

export function chartBuilder(domElement, label, data, graph_type, additional_options) {
  const element = document.getElementById(domElement);

  const graphData = {
    labels: label,
    datasets: data,
  };
  const graph_config = config(graph_type, graphData, additional_options);

  initGraph(element, graph_config);
}
