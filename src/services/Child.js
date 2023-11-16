import Client from './api'

export const CreateChild = async (data) => {
  try {
    const res = await Client.post('/child/add', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const EditChild = async (childID, data) => {
  try {
    const res = await Client.put(`/child/edit?id=${childID}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetChild = async (childID) => {
  try {
    const res = await Client.get(`/child?id=${childID}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetChildren = async () => {
  try {
    const res = await Client.get('/child/all')
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteChild = async (childID) => {
  try {
    const res = await Client.delete(`/child/delete?id=${childID}`)
    return res.data
  } catch (error) {
    throw error
  }
}
