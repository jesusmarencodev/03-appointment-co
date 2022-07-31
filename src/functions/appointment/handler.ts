
export const appointmentHandler = async (event) => {
  console.log("estoy desde la lambda que ejecutara operaciones desde colombia");
  console.log(event);

  return {
    statusCode: 200,
    event
  };
};
