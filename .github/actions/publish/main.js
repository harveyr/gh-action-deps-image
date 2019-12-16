async function run() {
  console.log('hiya')
}

run().catch(err => {
  core.setFailed(`${err}`)
})
