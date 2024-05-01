import { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => { } }) => {
  
  const inputRefs = useRef([])
  const [otp, setOtp] = useState(new Array(length).fill(""));
  console.log(inputRefs)
  
  useEffect(() => {
  if (inputRefs.current[0])  inputRefs.current[0].focus()
},[])



  const handleChange = (index, event) => {
    const value = event.target.value;
    setOtp(prevState => {
      return prevState.map((digit, idx) => (idx === index ? value : digit));
    });
  };

  const handleClick = (index) => {
    // handle click event
  };

  const handleKeyDown = (index, event) => {
    // handle key down event
  };

  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            className="w-10 h-10 m-2 text-center text-sm border-2 border-gray-400 rounded-sm"
            type="text"
            key={index}
            value={value}
            ref={(input) => inputRefs.current[index]=input}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        );
      })}
    </div>
  );
};



export default OtpInput;
