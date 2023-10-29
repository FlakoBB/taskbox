export const addTask = async (data) => {
  try {
    const response = await fetch('http://localhost:8000/tasks/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error('Error al agregar tarea')
    }

    return response.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getAllTasks = async () => {
  try {
    const response = await fetch('http://localhost:8000/tasks/')
    if (!response.ok) {
      throw new Error('Error al obtener las tareas')
    }
    return response.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getSingleTask = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/tasks/${id}/`)
    if (!response.ok) {
      throw new Error('Error al obtener los detalles de la tarea')
    }
    return response.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const updateTask = async (id, data) => {
  try {
    const response = await fetch(`http://localhost:8000/tasks/${id}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (!response.ok) {
      throw new Error('Error al actualizar la tarea')
    }
    return response.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const deleteTask = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: 'DELETE'
    })
    return response.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}
