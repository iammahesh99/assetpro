export function checkedFilterData(filterby, currentData) {
  const selectedFilter = [];
  const { checkvalue } =
    currentData[
      currentData.findIndex(function (filter) {
        return filter.label === filterby;
      })
    ];

  checkvalue.forEach((element) => {
    if (element.checked === true) {
      selectedFilter.push(element.name);
    }
  });
  return selectedFilter;
}
