import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import bgChair from '../../../assets/images/bg.png'

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header className='my-6'
            style={{
                background: `url(${bgChair})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse pb-20">
                    <img src={chair} alt="dentist-chair" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-6'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;