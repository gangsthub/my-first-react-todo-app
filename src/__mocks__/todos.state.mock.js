jest
  // @ts-ignore
  .spyOn(global.Date, 'constructor')
  .mockImplementation(() => new Date('2019-06-19T00:07:19.309Z'))

jest.mock('../utils/uuid', () => jest.fn().mockReturnValue('1'))
