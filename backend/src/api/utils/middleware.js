const errorHandler = (error, request, response, next) => {
  console.log(error.name)
  if (error.name === 'NotFound') {
    return response.status(404).send( { error: error.message } )
  } else if (error.name === 'ValidationError') {
    return response.status(400).json( { error: error.message } )
  }
  next(error)
}

export { errorHandler };