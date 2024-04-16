import { useState } from "react"


const PhoneOtpForm = () => {
    const [phoneNumber,setPhoneNumber] = useState("")
  return (
      <div>
          <form onSubmit={() => { }}>
              <input type="text" value={phoneNumber}/>
          </form>
    </div>
  )
}

export default PhoneOtpForm