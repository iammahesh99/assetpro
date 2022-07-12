import { getIndication } from "../../store/Onboarding/slice";

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
  let indicationArray = [];
  value.forEach((item) => {
    const { indication } = item;
    indicationArray = [...indicationArray, ...indication];
  });
  dispatch(getIndication(removeDuplicate(indicationArray)));
};

const removeDuplicate = (completeArray) => {
  const result = [
    ...new Set(completeArray.map((item) => JSON.stringify(item))),
  ].map((data) => JSON.parse(data));
  return result;
};
