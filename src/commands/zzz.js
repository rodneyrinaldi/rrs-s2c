module.exports = {
  name: 'zzz',
  alias: ['z'],
  run: async (toolbox) => {
    const {
      template: { generate },
      print: { info },
    } = toolbox

    const name = 'init'

    await generate({
      template: 's2c-ctrl.json.ejs',
      target: `.s2c/s2c-ctrl.json`,
      props: { name },
    })

    info(`Generated control file at .s2c/s2c-ctrl.json`)
  },
}
