import Client from './api'

export const GetAllCaregivers = async () => {
  try {
    const res = await Client.get('/caregiver/all')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetCaregiver = async (caregiverID) => {
  try {
    const res = await Client.get(`/caregiver?id=${caregiverID}`)
    return res.data
  } catch (error) {
    throw error
  }
}
