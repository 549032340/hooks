import { resolve } from 'path'
import { existsSync } from 'fs-extra'
import execa from 'execa'

test('package', async () => {
  const f = resolve(__dirname, '../../node_modules/.bin/f')
  const fixture = resolve(__dirname, './fixtures/package')
  const dist = resolve(fixture, './.serverless')

  await execa(f, ['package'], { cwd: fixture })

  expect(existsSync(resolve(dist, 'registerFunction.js'))).toBeTruthy()
  expect(existsSync(resolve(dist, 'index-controller.js'))).toBeTruthy()
  expect(existsSync(resolve(dist, 'index.js'))).toBeTruthy()
})
