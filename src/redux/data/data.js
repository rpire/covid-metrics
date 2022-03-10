const LOAD_DATA = 'App/data/LOAD_DATA';

const formatNum = (num) => num.toString().padStart(2, '0');

const formatDate = (date) => {
  const formattedDate = [
    date.getFullYear().toString(),
    formatNum(date.getMonth() + 1).toString(),
    formatNum(date.getDate() - 1).toString(),
  ];

  return formattedDate.join('-');
};

const DATE = new Date();
const YESTERDAY = formatDate(DATE);

const url = `https://api.covid19tracking.narrativa.com/api/${YESTERDAY}/country/united_kingdom`;

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
    .then((response) => response.json())
    .catch(() => initialState);
  dispatch(loadData(fetchedData.dates[YESTERDAY].countries['United Kingdom']));
};

export default dataReducer;
