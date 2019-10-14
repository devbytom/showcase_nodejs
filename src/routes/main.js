export default {
  base: (req, res) => {
    const valid = /^k3y$/.test(req.body.key) || /^k3y$/.test(req.query.key);
    return valid
      ? res.json({
          status: true,
          message: 'there is your response',
          p: 'q',
        })
      : res.json({
          status: false,
          message: 'not today fella',
        });
  },
};
