/* eslint-disable no-undef */
const { getOffices, calculateDistance } = require('./invitees');

const mockData = [
  {
    organization: 'Balance Work',
    offices: [
      {
        location: 'Sydney, Australia',
        address: 'Suite 130, 10 Pitt St',
        coordinates: '1, 1',
      },
    ],
  },
  {
    organization: 'SpringBoard',
    offices: [
      {
        location: 'Banbury, Oxfordshire',
        address: 'Banbury, Oxfordshire',
        coordinates: '1.2,1.2',
      },
    ],
  },
  {
    organization: 'Talent Lounge',
    offices: [
      {
        location: 'México City, Mexico',
        address: 'Emerson 15 - 50, Colonia, Mexico City ',
        coordinates: '3,3',
      },
    ],
  },
];


describe('Eligible Partners Test Suite', () => {
  it('calculates distance between given coordinates', () => {
    const distance = calculateDistance([0, 0], [10, -10]);
    expect(distance).toBeCloseTo(1568, 0);
  });
  it('return zero(0) when coordinates are the same', () => {
    const distance = calculateDistance([0, 0], [0, 0]);
    expect(distance).toBe(0);
  });
  it('get offices based on proximity', () => {
    const result = getOffices(mockData, [0, 0], 300);
    expect(result).toHaveLength(2);
    expect(result[0].name).toBe('Balance Work');
    expect(result[0].address).toBe('Suite 130, 10 Pitt St');
    expect(result[1].name).toBe('SpringBoard');
    expect(result[1].address).toBe('Banbury, Oxfordshire');
  });
});
