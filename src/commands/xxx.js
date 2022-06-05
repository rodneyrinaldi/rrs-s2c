const command = {
  name: 'xxx',
  alias: ['x'],
  run: async (toolbox) => {
    const { print, filesystem } = toolbox

    await filesystem.remove('.s2c')

    const fs = require('fs')
    const path = './.s2c'
    if (fs.existsSync(path)) {
      print.warning('Control already created')
    } else {
      await fs.mkdir(path, (error) => {
        if (error) {
          print.error('Action failed')
        } else {
          print.info('Created control folder')

          const controlObjects = checkFiles(`${path}/`)
          const controlFile = createControl(fs, path, controlObjects)

          print.info('Created control file')
          print.info('Created control')
        }
      })
    }
  },
}

async function checkFiles(path) {
  const listObjects = await ['xxx.txt', 'yyyy.txt']
  const retFiles = await JSON.stringify(listObjects)
  var jsonArray = await JSON.parse(JSON.stringify(listObjects))

  return retFiles
}

async function createControl(fs, path, file) {
  await fs.writeFile(`${path}/s2c-ctrl.json`, String(file), function (err) {
    if (err) {
      return err
    }
    return 'Created file'
  })
}

module.exports = command
