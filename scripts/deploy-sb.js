const { exec } = require('child_process')
const ghpages = require('gh-pages')

exec('yarn build-storybook', (err, stdout, stderr) => {
  if (err) console.error(err)
  else {
    console.log(stdout)
    if (stderr) console.error(stderr)

    ghpages.publish(
      'storybook-static',
      {
        branch: 'sb',
        repo: 'https://github.com/tkddn204/blog',
      },
      console.error
    )
  }
})
