const Notification = ({data}) => {

  if (data.message === null) {
    return null
  }

  const successNotificationStyle = {
    color:"green",
    backgroundColor:"lightgray",
    boxSizing:"border-box",
    border:"1px solid green",
    padding: "20px",
    marginBottom:"20px",
    fontWeight:"700",
    fontSize:"20px"
  }

  const errorNotificationStyle = {
    ...successNotificationStyle,
    color:"red",
    border:"1px solid red",
  }

  return (
    <div style={data.type==="error"? errorNotificationStyle: successNotificationStyle}>
      {data.message}
    </div>
  )
}

export default Notification