let postcss = require('postcss')

let plugin = require('./')

async function run (input, output, opts) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('tranforms basic values', async () => {
  await run('a { font-size: 1rem; }', 'a { font-size: 16px; }', {})
})

it('uses the user provided options', async () => {
  await run(
    'a { font-size: 1rem; }',
    'a { font-size: 10px; }',
    { baseSize: 10 }
  )
})

it('transform floating point values', async () => {
  await run('a { font-size: 1.5rem; }', 'a { font-size: 24px; }', {})
})

it('transforms complex values', async () => {
  await run('a { margin: 1rem 0 2rem 0; }', 'a { margin: 16px 0 32px 0; }', {})
})

it('transforms multiple definitions', async () => {
  await run(
    'a { font-size: 1rem; padding: .5rem; }',
    'a { font-size: 16px; padding: 8px; }'
  )
})
