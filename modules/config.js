export const config = (
  type,
  data,
  options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }
) => {
  return {
    type: type,
    data: data,
    options: options,
  };
};
