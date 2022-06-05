const command = {
  name: 'set',
  alias: ['s'],
  run: async (toolbox) => {
    const { print } = toolbox

    print.info('Param set')
  },
}

module.exports = command
