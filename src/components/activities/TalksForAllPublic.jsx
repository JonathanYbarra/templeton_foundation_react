import { useEffect, useState } from 'react';
import { CustomSelect } from './CustomSelect';
import { talksForGeneralPublic } from '../../core/services/activities';

export const TalksForAllPublic = () => {

    const [date, setDate] = useState('');
    const [talksAllPublic, setTalksAllPublic] = useState(null);

    useEffect(() => {
        findtalksAllPublic();
    }, [talksAllPublic, date]);

    const handleChange = ({ target }) => {
        setDate(target.value);
    };

    const findtalksAllPublic = () => {
        setTalksAllPublic(talksForGeneralPublic.find(talk => talk.id === date));
    }

    const renderContent = () => {
        return (
            <div className="my-5">
                {/* <h5 className="my-5 text-center">{talksAllPublic.title}</h5> */}

                <p className="my-5">
                    {talksAllPublic.description}
                </p>

                <span>
                    {talksAllPublic.directedBy}
                </span>
            </div>
        )
    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mt-5">
                {
                    talksAllPublic && talksAllPublic.pdfPresentation ?
                        <div className="d-flex">
                            <p>See presentation</p>
                            <a href={talksAllPublic.pdfPresentation} target="_blank" className="ms-1 text-decoration-none">click here.</a>
                        </div> :
                        <div></div>
                }

                <CustomSelect
                    handleChange={handleChange}
                    date={date}
                    options={talksForGeneralPublic}
                />
            </div>

            {
                talksAllPublic ?
                    renderContent() :
                    <p className="text-center text-danger my-5">Please select an event</p>
            }
        </>
    )
}
