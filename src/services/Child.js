import Client from './api'

export const GetChildren = async () => {
  try {
    const res = await Client.get('/child/all')
    return res.data
  } catch (error) {
    throw error
  }
}
