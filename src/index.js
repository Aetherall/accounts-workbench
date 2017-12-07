// 1 => npm install
// 2 => npm run build
// 3 => Debug with configuration

class Foo{
  constructor(){
    this.foo = 'foo'
  }

  bar = () => {
    console.log(this.foo) // Add a breakpoint on this line and hover "this"
  }
}

const foo = new Foo();

foo.bar();