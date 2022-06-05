const command = {
  name: 's2c',
  run: async (toolbox) => {
    const { print } = toolbox

    print.info('Welcome to s2c cli')
  },
}

module.exports = command
