import mainRoute from '../../routes/main';

const res = {
  output: null,
  json: function(s) {
    this.output = s;
    return this.output;
  },
};

const validArgsResponse = {
  status: true,
  message: 'there is your response',
  // prop: 'aaaaaaaa',
};

describe('base method', () => {
  describe('err', () => {
    it('should return invalidArgsResponse', () => {
      const invalidArgsResponse = {
        status: false,
        message: 'not today fella',
      };

      const req = {
        body: {
          key: 'anything else',
        },
        query: {
          key: 'anything else',
        },
      };

      mainRoute.base(req, res);
      expect(res.output).toStrictEqual(invalidArgsResponse);
    });
  });
  describe('fine', () => {
    it('should return validArgsResponse', () => {
      const req = {
        body: {
          key: 'k3y',
        },
        query: {
          key: 'k3y',
        },
      };

      mainRoute.base(req, res);
      expect(res.output).toStrictEqual(validArgsResponse);
    });
  });
});
