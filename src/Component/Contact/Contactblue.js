import './Contblue.css';
function Contactblue() {
  return (
    <div className='Container'>
      <h1 className='container-header'> Connect With US</h1>
      <p> we could love to respond to your quaries and
        help you succeed. Feel free to get in touch with us.</p>
      <div className='contact-box'>
        <div className='contact-left'>
          <h3 className='container-head'> Sent Your Request </h3>
          <form> 
            <div className='input-row'> 
            <div className='input-group'>
         <label> Name</label>
         <input type='text' placeholder='jib'/>
          </div> 
          <div className='input-group'>
         <label> Phone</label>
         <input type='text' placeholder='+91'/>
          </div> 
          </div> 
          <div className='input-row'> 
            <div className='input-group'>
         <label> Email</label>
         <input type='email' placeholder='jibi21@gmail.com'/>
          </div> 
          <div className='input-group'>
         <label> Phone</label>
         <input type='text' placeholder='+91'/>
          </div> 
          </div> 
         <label className='container-msg'> message</label>
          <textarea rows='3' placeholder='Your Message'> </textarea>          
          <button type="submit" className='container-btn'>  submit</button>
          </form>
        </div>
        <div className='contact-right'>
          <h3>reach us </h3> 
        </div>
      </div>
    </div>
  );
}
export default Contactblue;

