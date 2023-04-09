import React, { useState } from 'react'
import axios from 'axios'
import Flight from '../Loader/flight'

const FormSurvey = () => {
  const [responseBot, setResponseBot] = useState([])
 const [submitLoader,setSubmitLoader]=useState(false)
  const RequestChat = (e) => {
    const people = e.target[0].value
    const budget = e.target[1].value
    const mainland = e.target[2].value
    const ourmessage = `I'm looking for a vacation, for ${people} friends, with budget of ${budget}$, destination: ${mainland}, give me also details about the attractions there`
    console.log(ourmessage);
    axios.post('http://localhost:8000/gpt/', ourmessage)
      .then(res => {
        const responseServer = res.data
        setResponseBot(responseServer.split('\n'))
        setSubmitLoader(false)
      })
      .catch(error => {
        console.log(error)
  })
  }
  return (
    <>
    <form onSubmit={(e) => {
      e.preventDefault()
      RequestChat(e)
      setSubmitLoader(true)
    }}>
      <div>How many People</div>
      <input type='number'></input>
      <div>What is your Budget</div>
      <input type='text'></input>
      <div>Which mainland</div>
      <select>
        <option value="America">America</option>
        <option value="Eroupe">Eroupe</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
      </select>
      <button type='submit'>Searching</button>
    </form>
    <div>
    {
            responseBot.length > 0  && <div>{responseBot?.map(line => <div>{line}</div>)}</div>
          }
          {
              submitLoader && <Flight/>
          }
    </div>
    </>
  )
}
export default FormSurvey