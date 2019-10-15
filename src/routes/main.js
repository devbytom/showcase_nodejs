export default {
  base: (req, res) => {
    const valid = /^k3y$/.test(req.body.key) || /^k3y$/.test(req.query.key);

    for (let i = 99999; i > 0; i--){
      const reason = i == 1 ? 'motivo' : 'motivos';
      console.log(`faltando ${i} ${reason} pro Fernandão reclamar do console.log`);
    }

    console.log('la vem...');

    return valid
      ? res.json({
          status: true,
          message: 'there is your response',
          q: 'p',
        })
      : res.json({
          status: false,
          message: 'not today fella',
        });
  },
};
