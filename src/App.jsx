
import { TextField, Stack, Button, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {




  // const [bgColor, setBgColor] = useState('orange');
  const [Name, setName] = useState("")
  const [Address, setAddress] = useState("")
  const [Mobile, setMobile] = useState("")
  const [Email, setEmail] = useState("")
  const [Gender, setGender] = useState("")
  const [DateOfBirth, setDateOfBirth] = useState("")
  const [course, setcourse] = useState("")


  const [invalidName, setinvalidName] = useState(false)
  const [invalidAddress, setinvalidAddress] = useState(false)
  const [invalidMobile, setinvalidMobile] = useState(false)
  const [invalidEMail, setinvalidEMail] = useState(false)
  const [invalidGender, setinvalidGender] = useState(false)
  const [invalidDateOfBirth, setinvalidDateOfBirth] = useState(false)
  // const [invalidCourse, setinvalidCourse] = useState(false)

  //asdfghjkl;'sdfghjkl;

  const [noName, setNoName] = useState(false)
  const [noNumber, setNoNumber] = useState(false)
  const [noEmail, setNoEmail] = useState(false)

  const validateInput = (inputTag) => {
    console.log(inputTag, typeof inputTag);
    const { name, value } = inputTag
    // console.log(name,value.match(/[0-9]*.[0-9]+$/));
    console.log(name, value.match(/^[A-Za-zÀ-ÿ\s'-]+$/));
    console.log(name, value.match(/^[A-Za-zÀ-ÿ\s'-]+$/));

    if (name == 'name') {
      setName(value)
      if (!!value.match(/^[A-Za-zÀ-ÿ\s'-]+$/)) {
        setinvalidName(false)
      }
      else {
        setinvalidName(true)
      }
    } else if (name == "address") {
      setAddress(value)
      if (!!value.match(/^[A-Za-zÀ-ÿ\s'-]+$/)) {
        setinvalidAddress(false)
      }
      else {
        setinvalidAddress(true)
      }
    }
    else if (name == "mobile") {
      setMobile(value)
      if (!!value.match(/^\+?[0-9][0-9 -.]{9,14}$/)) {
        setinvalidMobile(false)
      }
      else {
        setinvalidMobile(true)
      }
    } else if (name == "email") {
      setEmail(value)
      if (!!value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        setinvalidEMail(false)
      }
      else {
        setinvalidEMail(true)
      }
    } else if (name == "gender") {
      setGender(value)
      if (!!value.match(/^[A-Za-zÀ-ÿ\s'-]+$/)) {
        setinvalidGender(false)
      }
      else {
        setinvalidGender(true)
      }
    } else if (name == "dateofbirth") {
      setDateOfBirth(value)
      if (!!value.match(/^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/)) {
        setinvalidDateOfBirth(false)
      }
      else {
        setinvalidDateOfBirth(true)
      }
    }
    else {
      setDateOfBirth(value)
      if (!!value.match(/^[A-Za-zÀ-ÿ\s'-]+$/)) {
        setinvalidDateOfBirth(false)
      }
      else {
        setinvalidDateOfBirth(true)
      }
    }

  }

  const submitBTN = () => {
    if (Name && Address) {
      alert("Data Stored Successfully")
      cancelBTN()
    }
  }
  const cancelBTN = () =>{
    setName("")
    setAddress("")
    setMobile("")
    setEmail("")
    setDateOfBirth("")
    setGender("")
    setcourse("")
    console.log('cancel');
    
    
  }

  return (
    <>



      <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
        <div className='bg-light p-5 rounded'>
          <h3>Higher Secondery Form</h3>

          <form className='mt-5'>
            {/* Name */}
            <div className='mb-3'>
              <TextField value={Name || ""} name='name' onChange={(e) => validateInput(e.target)} className='w-100' id="outlined-Name" label="Name" variant='outlined' />
            </div>
            {/* Invalid Name */}
            {invalidName && <div className='text-danger fw-bolder mb-3'>
              Invalid Name
            </div>}


            {/* Address */}
            <div className='mb-3'>
              <TextField value={Address || ""} name='address' onChange={(e) => validateInput(e.target)} className='w-100' id="outlined-Address" label="Address" variant='outlined' />
            </div>

            {/* Invalid Name */}
            {invalidAddress && <div className='text-danger fw-bolder mb-3'>
              Invalid Address
            </div>}


            {/* Mobile */}
            <div className='mb-3'>
              <TextField value={Mobile || ""} name='mobile' onChange={(e) => validateInput(e.target)} className='w-100' id="outlined-Mobile" label="Mobile" variant='outlined' />
            </div>
            {/* Invalid Name */}
            {invalidMobile && <div className='text-danger fw-bolder mb-3'>
              Invalid Number
            </div>}


            {/* EMail */}
            <div className='mb-3'>
              <TextField value={Email || ""} name='email' onChange={(e) => validateInput(e.target)} className='w-100' id="outlined-EMail" label="E Mail" variant='outlined' />
            </div>
            {/* Invalid Name */}
            {invalidEMail && <div className='text-danger fw-bolder mb-3'>
              Invalid EMail
            </div>}






            <FormLabel id="demo-row-radio-buttons-group-label" className='mt-2'>Gender</FormLabel>
            <RadioGroup value={Gender || ""} name="gender" onChange={(event) => { validateInput(event.target) }} row aria-labelledby="demo-row-radio-buttons-group-label" >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            {invalidGender && <p>* Please Enter your Gender</p>}


            {/* DateOfBirth */}
            <div className='mb-3'>
              <TextField value={DateOfBirth || ""} name='dateofbirth' onChange={(e) => validateInput(e.target)} className='w-100' id="outlined-DateOfBirth" label="DateOfBirth" variant='outlined' />
            </div>
            {/* Invalid DateOfBirth */}
            {invalidDateOfBirth && <div className='text-danger fw-bolder mb-3'>
              Invalid DateOfBirth
            </div>}
            {/* Course */}
            <div className='mb-3'>
              <select value={course || ""} name="course" id="" className='w-100'>
                <option value="">Course</option>
                <option value="">Biology</option>
                <option value="">Computer Science</option>
                <option value="">Commerce</option>
                <option value="">Humanities</option>
              </select>
            </div>

            {/* Button */}
            <Stack direction="row" spacing={2}>
              <Button onClick={submitBTN}  className='bg-dark' variant="contained" style={{ width: '50%', height: '70px' }}>Register</Button>
              <Button onClick={cancelBTN} className='border border-dark text-dark' variant="outlined" style={{ width: '50%', height: '70px' }}>Cancel</Button>
            </Stack>
          </form>

        </div>

      </div>

    </>
  )
}

export default App
