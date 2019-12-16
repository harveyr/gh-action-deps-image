import * as core from '@actions/core'
import * as kit from '@harveyr/github-actions-kit'

async function run(): Promise<void> {
  const result = await kit.execAndCapture('gcloud', [
    'docker',
    '--',
    'pull',
    'gcr.io/ua-web-ci/airship-deps:python3.7-alpine3.10-dde7594',
  ])

  console.log('result', result)
}

run().catch(err => {
  core.setFailed(`${err}`)
})
