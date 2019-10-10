export default {
  base: (req, res) => {
    const valid = /k3y/.test(req.body.key);
    return valid
      ? res.json({
          status: true,
          message: 'there is your response',
        })
      : res.json({
          status: false,
          message: 'not today fella',
        });
  },
};
