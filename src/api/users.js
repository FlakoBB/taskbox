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

export const getSingleUser = async (user) => {
  try {
    const response = await fetch(`http://localhost:8000/users/${user}`)

    if (!response.ok) {
      throw new Error('Usuario no encontrado')
    }

    return response.json()
  } catch (error) {
    console.log('Error al obtener usuario', error)
    throw error
  }
}

export const updateUser = async (id, data) => {
  try {
    const response = await fetch(`http://localhost:8000/users/${id}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (!response.ok) {
      throw new Error('Error al actualizar usuario')
    }
    return response.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}
