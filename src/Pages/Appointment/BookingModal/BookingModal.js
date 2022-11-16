import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    // treatment is just another name of appointmentOptions with name, slots, _id
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone,
        }


        // TODO: send data to the server
        // and once data is saved then close the modal
        // and display success toast
        console.log(booking);
        setTreatment(null)
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" value={date} disabled className="input input-bordered w-full font-bold" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, index) => <option
                                    value={slot}
                                    key={index}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Email Address" className="input input-bordered w-full" />
                        <input name='phone' type="phone" placeholder="Phone Number" className="input input-bordered w-full" />
                        <br />
                        <input className='w-full btn btn-accent' type="submit" value="SUBMIT" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;