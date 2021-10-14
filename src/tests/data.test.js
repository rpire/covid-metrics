import { loadData } from '../redux/data/data';

describe('Test for loadData function', () => {
  const data1 = {
    name: 'This is a test',
    id: 'test 1',
  };

  const data2 = {
    name: 'This is another test',
    id: 'test 2',
  };

  test('Load data1', () => {
    expect(loadData(data1)).toEqual({
      type: 'App/data/LOAD_DATA',
      payload: data1,
    });
  });

  test('Load data2', () => {
    expect(loadData(data2)).toEqual({
      type: 'App/data/LOAD_DATA',
      payload: data2,
    });
  });
});
