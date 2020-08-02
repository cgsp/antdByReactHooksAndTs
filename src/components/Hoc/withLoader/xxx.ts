// ====================泛型只读数组==================
const rArr1: ReadonlyArray<number> = [1]
// rArr2=rArra，这样，rArr2也是只读的
const rArr2 = rArr1
// 报错
// rArr2.push(1)
// 恢复编辑
const rArr3 = rArr2 as number[]
rArr3.push(1)
// rArr2还是不能编辑
// rArr2.push(3)

export interface ReadnOlyStringArray {
  [key: number]: string
}

const rArr4: ReadnOlyStringArray = ['1', '2']
const rArr5 = rArr4 as string[]

// ====================泛型变量==================
function swap1<T, U>(arr: [T, U]): [U, T] {
  return [arr[1], arr[0]]
}

const swap2 = <T, U>(arr: [T, U]): [U, T] => {
  return [arr[1], arr[0]]
}

function getArr1<T>(arr: T[]): T[] {
  return [...arr]
}

const getArr2 = <T>(arr: T[]): T[] => {
  return [...arr]
}

getArr1<string>(['1', '2'])
getArr2<number>([1, 3])

const arr1: Array<number> = [1, 2]

// ====================泛型接口1==================
interface Gsp1 {
  <T>(arg: T): T
}
let gsp1: Gsp1 = <T>(arg: T): T => arg
// 下面这个写法不行
// let gsp11: Gsp1 = <string>(arg: string): string => arg
// 这个写法可以
gsp1<string>('aaa')

// ====================泛型接口2==================
interface Gsp2<T, U> {
  (arg: [T, U]): [U, T]
}

let gsp2: Gsp2<string, number> = function ([a, b]) {
  return [b, a]
}

gsp2(['1', 2])

interface Gsp3<T, U> {
  key1: T
  key2: U
}

let gsp3: Gsp3<string, number> = {
  key1: '1',
  key2: 2,
}

// ====================泛型类==================
class GspClass1<T> {
  private data = []
  // add(item: T) {
  //   this.data.push(item)
  // }
}

let gspClass1 = new GspClass1<number>()
// gspClass1.add(1)

// ====================泛型约束1==================
interface Length {
  length: number
}

function fn1<T extends Length>(arg: T): [T] {
  return [arg]
}

fn1({ length: 1 })
fn1([])

function fn2<T, P extends keyof T>(obj: T, key: P): T[P] {
  return obj[key]
}

fn2({ name: 'gsp', age: 18 }, 'name')

// ====================泛型约束2==================
function createFactory1<T>(CConstuctor: { new (): T }): T {
  return new CConstuctor()
}

function createFactory2<T>(CConstuctor: new () => T): T {
  return new CConstuctor()
}

class CC {}

class A extends CC {}

createFactory1(CC)
createFactory2(CC)
createFactory2(A)

// ====================交叉类型==================

function comb<T, U>(first: T, second: U): T & U {
  let result = {} as T & U

  result = {
    ...first,
    ...second,
  }

  return result
}
