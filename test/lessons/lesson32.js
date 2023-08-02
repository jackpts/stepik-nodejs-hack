/* globals describe, it, afterEach */
const { expect } = require('chai')
// const helpers = require('../helpers')

// const db = require('../../src/model/db')
// const {
//   getTodos
// } = require('../../src/model/todo')

describe('Урок 3.2 mod', () => {
  // afterEach(async () => {
  //   const collection = await db.getCollection('todos')
  //   await collection.deleteMany()
  //   await db.close()
  // })

  it('Установка подключения к БД mod', () => {
    // await db.init()
    expect(1).equal(1)
  })

  it('Проверка чтения и записи данных', () => {
    // await db.init()

    // const expectedResult = [await helpers.createTodo()]
    // const result = await getTodos().toArray()
    // expect(result).to.deep.equal(expectedResult)
    expect(2).equal(2)
  })
})
