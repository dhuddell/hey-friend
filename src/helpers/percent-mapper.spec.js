import PercentMapper from './percent-mapper';

describe('Percent Mapper function', () => {
  let result;

  it('should correctly map zero', () => {
    result = PercentMapper(0);
    expect(result).toEqual('zero');
  });

  it('should correctly map twenty-five', () => {
    result = PercentMapper(25);
    expect(result).toEqual('twenty-five');
  });

  it('should correctly map fifty', () => {
    result = PercentMapper(50);
    expect(result).toEqual('fifty');
  });

  it('should correctly map seventy-five', () => {
    result = PercentMapper(75);
    expect(result).toEqual('seventy-five');
  });

  it('should correctly map one-hundred', () => {
    result = PercentMapper(100);
    expect(result).toEqual('one-hundred');
  });

  it('should correctly map default', () => {
    result = PercentMapper(9000);
    expect(result).toEqual('one-hundred');
  });
});
