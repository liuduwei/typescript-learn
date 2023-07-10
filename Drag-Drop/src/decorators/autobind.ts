// Autobind
export default function Autobind(
  _: any,
  _2: string,
  description: PropertyDescriptor
) {
  const originalFn = description.value;
  const adjDescription: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      return originalFn.bind(this);
    },
  };
  return adjDescription; //return void or adjDescription
}
