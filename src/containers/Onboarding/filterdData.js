import { getIndication, getMoa, getPhases } from "../../store/Onboarding/slice";

export const checkedData = (selectedValue) => {
  let duplicateRemoved = [];
  selectedValue.forEach((item) => {
    if (duplicateRemoved.findIndex((o) => o.name === item.name) >= 0) {
      duplicateRemoved = duplicateRemoved.filter((x) => x.name === item.name);
    } else {
      duplicateRemoved.push(item);
    }
  });
  return duplicateRemoved;
};

export const dispatchAllState = (dispatch, value) => {
  let moaArray = [];
  let indicationArray = [];
  let phaseArray = [];
  value.forEach((item) => {
    const { indication, moa, phase } = item;
    moaArray = [...moaArray, ...moa];
    indicationArray = [...indicationArray, ...indication];
    phaseArray = [...phaseArray, ...phase];
  });
  dispatch(getMoa(removeDuplicate(moaArray)));
  dispatch(getIndication(removeDuplicate(indicationArray)));
  dispatch(getPhases(removeDuplicate(phaseArray)));
};

const removeDuplicate = (completeArray) => {
  const result = [
    ...new Set(completeArray.map((item) => JSON.stringify(item))),
  ].map((data) => JSON.parse(data));
  return result;
};
