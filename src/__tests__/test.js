import { getBuffer, ArrayBufferConverter } from '../index';

test('loading to the buffer', () => {
    const bufferConverter = new ArrayBufferConverter();
    bufferConverter.load(getBuffer());
    expect(bufferConverter.buffer).toEqual(getBuffer());
  });

test('Return a string from the buffer', () => {
    const converter = new ArrayBufferConverter();
    converter.load(getBuffer());
    expect(converter.toString()).toBe(
      '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}',
    );
  });