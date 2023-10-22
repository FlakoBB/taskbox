export const registerUser = async (data) => {
  try {
    const response = await fetch('http://localhost:8000/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error('Error al registrar usuario')
    }

    return response.json()
  } catch (error) {
    console.log(error.message)
    throw error
  }
}

export const loginUser = async (data) => {
  try {
    const response = await fetch('http://localhost:8000/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.non_field_errors)
    }

    return response.json()
  } catch (error) {
    console.log(error.message)
    throw error
  }
}
