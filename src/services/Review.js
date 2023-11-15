import Client from './api'

export const GetCaregiverRating = async (caregiverID) => {
  try {
    const res = await Client.get(`/review/caregiver-rating?cid=${caregiverID}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetSessionReview = async (sessionID) => {
  try {
    const res = await Client.get(`/review/session?sid=${sessionID}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const AddReview = async (data) => {
  try {
    const res = await Client.post(`/review/add`, data)
    return res.data
  } catch (error) {
    throw error
  }
}
