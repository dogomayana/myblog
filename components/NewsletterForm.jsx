import React,{ useState } from 'react';
import { sanitize } from './../utils/miscellaneous';

// import Loader from 'react-loader-spinner'
// import LinearProgress  from '@mui/material/LinearProgress';
// import CircularProgress  from '@mui/material/CircularProgress';
// import Alert  from '@mui/material/Alert';

const NewsletterForm = ( { status, message, onValidated }) => {

    const [ error, setError ] = useState(null);
    const [ email, setEmail ] = useState(null);
  
    /**
     * Handle form submit.
     *
     * @return {{value}|*|boolean|null}
     */
    const handleFormSubmit = () => {
  
      setError(null);
  
      if ( ! email ) {
        setError( 'Please enter a valid email address' );
        return null;
      }
  
      const isFormValidated = onValidated({ EMAIL: email });
  
      // On success return true
      return email && email.indexOf("@") > -1 && isFormValidated;
    }
  
    /**
     * Handle Input Key Event.
     *
     * @param event
     */
    const handleInputKeyEvent = ( event ) => {
      setError(null);
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        handleFormSubmit();
      }
    }
  
    /**
     * Extract message from string.
     *
     * @param {String} message
     * @return {null|*}
     */
    const getMessage = (message) => {
      if ( !message ) {
        return null;
      }
      const result = message?.split('-') ?? null;
      if ( "0" !== result?.[0]?.trim() ) {
        return sanitize(message);
      }
      const formattedMessage = result?.[1]?.trim() ?? null;
      return formattedMessage ? sanitize( formattedMessage ) : null;
    }
  
    return (
      <div className='container'>
      <div className='bg-[#6495ed] p-2 mx-auto'>
        <h3 className="mb-3 text-capitalize text-lg lg:text-xl">Subscribe to newsletter</h3>
        <div className="flex">
          <div className='w-72 lg:w-96'>
            <input
              onChange={(event) => setEmail(event?.target?.value ?? '')}
              type="email"
              placeholder="Your email"
              className="border rounded border-secondary p-2 text-sm lg:text-lg inline-block w-full"
              onKeyUp={(event) => handleInputKeyEvent(event)}
            />
          </div>
          <div className="inline ml-1">
            <button  type="submit" className="bg-[#26619c] p-2 text-white lg:text-lg cursor-pointer rounded" onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
        </div>
        <div className="min-h-42px">
          { 'sending' === status ? <svg className='animate-spin h-5 w-5 mr-3 bg-red-600' viewBox='0 0 24 24'/> : null }
          {'error' === status || error ? (
            <div
            style={{color:'white' , paddingTop:2}}
              dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
            />
          ) : null }
          {'success' === status && 'error' !== status && !error && (
            <div style={{color:'green', fontSize:'bold', paddingTop:2}} dangerouslySetInnerHTML={{ __html: sanitize(message) }} />
          )}
        </div>
      </div>
      </div>
    );
  }
  
  export default NewsletterForm