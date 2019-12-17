import * as core from '@actions/core'
import * as kit from '@harveyr/github-actions-kit'

async function pullImage(imageUrl: string): Promise<boolean> {
  try {
    await kit.execAndCapture('docker', ['pull', imageUrl])
  } catch (err) {
    console.log('Failed to pull image %s: %s', imageUrl, err)
    return false
  }

  return true
}

async function run(): Promise<void> {
  const imageUrl = core.getInput('image_url')

  const pullSuccess = await pullImage(imageUrl)

  core.setOutput('image_url', imageUrl)
  core.setOutput('image_pulled', pullSuccess.toString())
}

run().catch(err => {
  core.setFailed(`${err}`)
})
