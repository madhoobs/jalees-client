import Client from './api'

export const GetCaregiverRating = async (caregiverID) => {
  try {
    const res = await Client.get(`/review/caregiver-rating?cid=${caregiverID}`)
    return res.data
  } catch (error) {
    throw error
  }
}
