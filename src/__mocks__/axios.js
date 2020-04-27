export default {
  get: jest.fn(() => Promise.resolve({ data: { weather: 'default' } })),
}
