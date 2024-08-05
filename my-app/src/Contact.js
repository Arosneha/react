import React from "react";
import { Form } from 'react-bootstrap';


const Contact =()=>{
    return(
        <>
        <h5 className="text-capitalize text-center text-danger mt-3 mb-6"> Holiday Fun</h5>
       <address>
       House, 1st Floor, The boardroom Modi, New Link Rd, near Fun Republic, Malad, Veera Desai Industrial Estate, Andheri West, Mumbai, Maharashtra 400058
      <br/>
        Phone:+91 9940882200
<br/>

       G-mail:mail@holidayfun.in
      
       </address>
          
<hr/>

<div className='container my-5'>
                <div className='row'>
                  
                    <div className='col-lg-6 d-flex justify-content-center mx-auto'>
                        <Form>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='first-name'>First Name</Form.Label>
                                    <Form.Control type='text' id='first-name' />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='last-name'>Last Name</Form.Label>
                                    <Form.Control type='text' id='last-name' />
                                </div>
                            </Form.Group>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='email-address'>Email Address</Form.Label>
                                    <Form.Control type='email' id='email-address' />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='phone-number'>Phone Number</Form.Label>
                                    <Form.Control type='tel' id='phone-number' />
                                </div>
                            </Form.Group>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='date'>Date</Form.Label>
                                    <Form.Control type='date' id='date' />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='guests-number'>Number Of Guests</Form.Label>
                                    <Form.Control type='number' id='guests-number' />
                                </div>
                            </Form.Group>
                            
                            <Form.Group className='mb-4'>
                                <Form.Label htmlFor='comments'>Comments</Form.Label>
                                <Form.Control type='textarea' id='comments' />
                            </Form.Group>

                            <button type='submit' className='btn btn-success btn-lg'>Submit</button>
                        </Form>
                    </div>
                </div>
            </div>

            
        


          <h3>
              Why you choose Holiday Fun:
              </h3>
          <p>
          Reputed for our competent customer service, the glowing testimonials we have received from our clients are one of the numerous reasons you should choose GT Holidays as your travel agent in Mumbai. We offer travel packages to hundreds of destinations in India and across the globe.

We have gained a reputation as a well-known destination management company with personalizing itineraries that match the client’s needs and budget. Our team members and experienced travel agents constantly strive to curate the most impeccable travel experience for everyone who reaches out to us.

Our Mumbai tour operators assist you with all travel arrangements throughout the vacation. From ticket reservations to visa processing and arranging guided tours to managing entry tickets and food arrangements, we pay attention to every little detail so that you don’t face any problems during the trip.

Although these elements might seem unnecessary, they require experience and professional expertise. As a premium travel agency in Mumbai, GT Holidays offer you a memorable and holistic travel experience.  
          </p>

          <h3>What to Look for in a Travel Agency in TamilNadu:</h3>
          <p>
          When looking for a travel agency in TamilNadu, there are several features you must look for to ensure you make the most of your trip. As one of the best tour operators in Mumbai, we provide a wide range of features at the best price.

While planning a trip on your own may seem easy, it is always as easy as it looks. Our travel agents help you save time and money. We save you the headache of looking for the best strategically located hotels and get your visas and tickets done as well.

Managing a job and maintaining that work-life balance is stressful as it is. At GT Holidays, we’re here to take the stress away from travel planning, irrespective of your group size and travel destination. We have first-hand experience with the best restaurant, the best time to visit the place, and the best shopping destinations.

There’s a lot that could go wrong during a vacation. Your luggage could get misplaced by the airlines, your flights could get cancelled, or bad weather can be a complete downer. An efficient travel agent like GT Holidays can deal with these impediments easily and quickly.

We also consider the travel conditions of our customers’ destinations and craft their itineraries accordingly.


          </p>
          <h3> What is the best in our agency:</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nisi natus numquam dolorum non praesentium dignissimos molestiae maxime. Labore corporis incidunt blanditiis accusantium voluptates enim rem eum ratione dicta ullam. Impedit vero, inventore ea adipisci debitis enim soluta quis id tenetur culpa voluptate blanditiis sint! Rerum sequi praesentium et consequatur, facere laudantium magni hic veniam sunt, dolorem non quidem! Magnam molestiae saepe dolore voluptates. Soluta vel laudantium aliquam repudiandae quos, corrupti recusandae dignissimos illum eligendi aliquid officiis earum possimus impedit quia commodi eaque unde facilis aperiam voluptas reprehenderit. Dolorem laborum modi ipsa aspernatur dolore eos sapiente eligendi repellendus, dignissimos sit.</p>
          <p>
          Stay Connected
             For contact us : +91 9940882200

             Contact us through Mail: mail@gtholidays.in
          </p>
       </>
    )
}
export default Contact;