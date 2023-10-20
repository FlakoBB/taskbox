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
