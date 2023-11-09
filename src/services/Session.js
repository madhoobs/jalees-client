import Client from './api'

export const GetSession = async (sessionID) => {
  try {
    const res = await Client.get(`/sessions/details?id=${sessionID}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetChildSessions = async (childID) => {
  try {
    const res = await Client.get(`/sessions/child?id=${childID}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetChildrenSessions = async () => {
  try {
    const res = await Client.get(`/sessions/all`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetCaregiverSessions = async (caregiverID) => {
  try {
    const res = await Client.get(`/sessions/caregiver?id=${caregiverID}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateSession = async (data) => {
  try {
    const res = await Client.post('/sessions/add', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateSession = async (sessionID, data) => {
  try {
    const res = await Client.put(`/sessions/edit?id=${sessionID}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteSession = async (sessionID) => {
  try {
    const res = await Client.delete(`/sessions/delete?id=${sessionID}`)
    return res.data
  } catch (error) {
    throw error
  }
}
