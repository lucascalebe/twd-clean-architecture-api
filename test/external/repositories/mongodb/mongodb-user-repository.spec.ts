import { MongoHelper } from '@/external/repositories/mongodb/helper/mongo-helper'
import { MongodbUserRepository } from '@/external/repositories/mongodb/mongodb-user-repository'

describe('Mongodb User Respository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    MongoHelper.clearCollection('users')
  })

  test('when user is added, it should exist', async () => {
    const userRepository = new MongodbUserRepository()
    const user = {
      name: 'any_name',
      email: 'any@mail.com'
    }
    await userRepository.add(user)
    expect(await userRepository.exists(user)).toBeTruthy()
  })

  test('find all users should return all added users', async () => {
    const userRepository = new MongodbUserRepository()
    await userRepository.add({
      name: 'any_name',
      email: 'any@mail.com'
    })
    await userRepository.add({
      name: 'any_name2',
      email: 'any2@mail.com'
    })

    const users = await userRepository.findAllUsers()
    expect(users[0].name).toEqual('any_name')
    expect(users[1].name).toEqual('any_name2')
  })
})
