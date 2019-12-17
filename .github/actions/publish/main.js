import { exec } from 'child_process'

async function run() {
  console.log('hiya', process.env.BRANCH)
  // const branch
}

async function runShell(command) {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        return reject(err)
      }
      if (stdout) console.log(stdout)
      if (stderr) console.error(stdout)

      return stdout + stderr
    })
  })
}

run().catch(err => {
  core.setFailed(`${err}`)
})
