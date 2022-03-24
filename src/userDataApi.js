// import users from './PseudoUsersData';
let users = {
  1: {
    id: 1,
    name: '李珊珊',
    idImg: [],
    gender: '女',
    birthday: '1995/03/11',
    height: 158,
    weight: 47,
    region: '台北市',
    phone: '0934-324-772',
    bankCode: '812',
    bankAccount: '03112340210583',
  },
  2: {
    id: 2,
    name: '王大明',
    idImg: [],
    gender: '男',
    birthday: '2000/08/29',
    height: 170,
    weight: 75,
    region: '高雄市',
    phone: '0912-345-678',
    bankCode: '100',
    bankAccount: '04312340210123',
  },
}

// get all users
export const getUsers = () =>
  new Promise((resolve, reject) => {
    if (!users) {
      return setTimeout(() => reject(new Error('Users not found')), 250)
    }

    setTimeout(() => resolve(Object.values(users)), 250)
  })

// get specific user by id
export const getUser = (id) =>
  new Promise((resolve, reject) => {
    const user = users[id]

    if (!user) {
      return setTimeout(() => reject(new Error('User not found')), 250)
    }

    setTimeout(() => resolve(users[id]), 250)
  })

// update user's information
export const updateUser = (id, data) =>
  new Promise((resolve, reject) => {
    if (!users[id]) {
      return setTimeout(() => reject(new Error('User not found')), 250)
    }

    users[id] = { ...users[id], ...data }

    return setTimeout(() => resolve(true), 250)
  })
