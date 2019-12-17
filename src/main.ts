import * as core from '@actions/core'
// import * as kit from '@harveyr/github-actions-kit'

async function run(): Promise<void> {
  // If we ever use this in a non-gcloud scenario, we could make that an option.
  const registryUrl = core.getInput('registry_url')
  const imageName = core.getInput('image_name')
  const imageTag = core.getInput('image_tag')

  console.log('registryUrl', registryUrl)
  console.log('imageName', imageName)
  console.log('imageTag', imageTag)

  // const result = await kit.execAndCapture('gcloud', [
  //   'docker',
  //   '--',
  //   'pull',

  //   'python3.7-alpine3.10-dde7594',
  // ])
}

run().catch(err => {
  core.setFailed(`${err}`)
})
