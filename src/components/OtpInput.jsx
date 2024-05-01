import { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(new Array(length).fill(""));
  console.log(inputRefs);

  useEffect(() => {
    if (inputRefs.current[0]) inputRefs.current[0].focus();
  }, []);

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    //validation allow only one input
    //extracts the substring from the last character index to the end of the string, which is just the last character itself.
    value.substring(value.length - 1);
    newOtp[index] = value.substring(value.length - 1);
    //set updated new otp otherwise it set to old value
    setOtp(newOtp);
    //submit trigger
    const fullOtp = newOtp.join("");
    console.log(newOtp, fullOtp);
    if (fullOtp.length === length) onOtpSubmit(fullOtp);
    //move to next input field if the current filed is filled
    //checks if the value exist and input box is not last box and also if there is a next box
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    // handle click event
    //set input to automatically end in that perticulat textbox
    inputRefs.current[index].setSelectionRange(1, 1) 
    //if there is empty input automatically jumps to it
    //  If the previous input field is empty, the function sets the focus on the first empty input field. This is done using inputRefs.current[otp.indexOf("")].focus(). The indexOf method returns the index of the first occurrence of the specified value in an array, in this case, an empty string (""). The focus method sets the focus on the input field at the returned index.
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus()
    }
  };

  const handleKeyDown = (index, event) => {
    // handle key down event
    if (
      event.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      //move previous input boxes on click backspace
      inputRefs.current[index-1].focus()
    }
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
            ref={(input) => (inputRefs.current[index] = input)}
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
