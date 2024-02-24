export function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    console.log(data.length)
    return (input => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
}

export class ArrayBufferConverter {
    construct() {
    }

    load(buffer) {
        this.buffer = buffer;
    }

    toString() {
        const bufferView = new Uint16Array(this.buffer);
        // let result = "";
        // bufferView.forEach(buf => result = result.concat(String.fromCharCode(buf)));
        // return result;
        return String.fromCharCode(...bufferView);

    }
}
