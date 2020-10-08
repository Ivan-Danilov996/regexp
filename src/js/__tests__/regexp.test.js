import Validator from '../app'

test.each([
    ['ivan', true],
    ['ivan-d', true],
    ['ivan_d', true],
    ['ivan-_d', true],
    ['ivan999-_d', true],
    ['ivan-д', false],
    ['ivan-9', false],
    ['ivan-', false],
    ['ivan_', false],
    ['9ivan-d', false],
    ['-ivan-d', false],
    ['_ivan-d', false],
    ['ivan9999-d', false]
])(('validation'), (nickname, expected) => {
    const name = new Validator(nickname)
    const result = name.validateUsername()
    expect(result).toEqual(expected);
  });