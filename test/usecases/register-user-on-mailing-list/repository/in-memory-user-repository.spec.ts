import { UserData } from '@/entities'
import { InMemoryUserRepository } from '@/usecases/register-user-on-mailing-list/repository'

describe('In memory User repository', () => {
  test('should return null if user is not found', async () => {
    const users: UserData[] = []
    const sut = new InMemoryUserRepository(users)
    const user = await sut.findUserByEmail('any@email.com')
    expect(user).toBeNull()
  })

  test('should return user if is found in the repository', async () => {
    const users: UserData[] = []
    const name = 'any_name'
    const email = 'any@email.com'
    const sut = new InMemoryUserRepository(users)
    await sut.add({ name, email })
    const user = await sut.findUserByEmail(email)
    expect(user.name).toBe(name)
  })

  test('should return all users in the repository', async () => {
    const users: UserData[] = [{ name: 'any_name', email: 'any@mail.com' },
      { name: 'second_name', email: 'second@mail.com' }]
    const sut = new InMemoryUserRepository(users)
    const returnedUsers = sut.findAllUsers()
    expect((await returnedUsers).length).toBe(2)
  })
})
