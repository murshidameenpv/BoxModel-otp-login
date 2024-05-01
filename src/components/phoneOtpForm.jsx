import { useState } from "react"
import OtpInput from "./OtpInput"



const PhoneOtpForm = () => {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [showOtpField,setShowOtpField] = useState(false)
    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }
    const handlePhoneSubmit = (e) => {
        e.preventDefault()
        //phone validation
        const regex = /[^0-9]/g;
        if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
            
            alert("Invalid Phone Number")
            return
        }
        //call api

        setShowOtpField(true)

    }
    const handleOtpSubmit = (otp) => {
        console.log("login Successfully",otp);
    }
  return (
      <div>
         {!showOtpField ? <form onSubmit={handlePhoneSubmit}>
              <input type="text" value={phoneNumber} onChange={handlePhoneNumber} placeholder="Enter Your Number.." className=""/>
              <button type="submit">Submit</button>
          </form> :
              <div>
                  <p>OTP Sent to {phoneNumber}</p>
                  <OtpInput length={4} onOtpSubmit={handleOtpSubmit} />
              </div>
          }
    </div>
  )
}

export default PhoneOtpForm