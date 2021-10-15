const LOAD_DATA = 'App/data/LOAD_DATA';

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() - 1);
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();
const workingDate = `${currentYear}-${currentMonth}-${currentDay}`;

const url = `https://api.covid19tracking.narrativa.com/api/${workingDate}/country/united_kingdom`;

const initialState = {
  regions: [
    {
      name: 'Gibraltar',
      id: 'gibraltar',
    },
    {
      name: 'Scotland',
      id: 'scotland',
    },
    {
      name: 'Channel Islands',
      id: 'channel_islands',
    },
    {
      name: 'North Ireland',
      id: 'north_ireland',
    },
    {
      name: 'Cayman Islands',
      id: 'cayman_islands',
    },
    {
      name: 'Montserrat',
      id: 'montserrat',
    },
    {
      name: 'Isle of Man',
      id: 'isle_of_man',
    },
    {
      name: 'Bermuda',
      id: 'bermuda',
    },
    {
      name: 'England',
      id: 'england',
    },
    {
      name: 'Wales',
      id: 'wales',
    },
  ],
  name: 'United Kingdom',
  id: 'united_kingdom',
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return action.payload;
    default:
      return state;
  }
};

export const loadData = (payload) => ({
  type: LOAD_DATA,
  payload,
});

export const getData = () => async (dispatch) => {
  const fetchedData = await fetch(url)
    .then((response) => response.json());
  dispatch(loadData(fetchedData.dates[workingDate].countries['United Kingdom']));
};

export default dataReducer;
