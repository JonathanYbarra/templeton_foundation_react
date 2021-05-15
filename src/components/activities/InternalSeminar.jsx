import { useEffect, useState } from 'react';
import { internalSeminars } from '../../core/services/activities';
import { CustomSelect } from './CustomSelect';

export const InternalSeminar = () => {

    const [date, setDate] = useState('');
    const [internalSeminar, setInternalSeminar] = useState(null);

    useEffect(() => {
        findInternalSeminar();
    }, [internalSeminar, date]);

    const handleChange = ({ target }) => {
        setDate(target.value);
    };

    const findInternalSeminar = () => {
        setInternalSeminar(internalSeminars.find(internal => internal.id === date));
    }

    const renderContent = () => {
        return (
            <div className="my-5">
                <h5 className="my-5 text-center">{internalSeminar.title}</h5>

                <p className="my-5">
                    {internalSeminar.description}
                </p>

                <span>
                    {internalSeminar.directedBy}
                </span>
            </div>
        )
    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mt-5">
                {
                    internalSeminar ?
                        <p className="d-flex align-items-center">
                            See the presentation in
                            <a onClick={(event) => { event.preventDefault(); window.open(internalSeminar.pdfPresentation); }}>
                                <span className="material-icons cursor-pointer">picture_as_pdf</span>
                            </a>
                        </p> :
                        <div></div>
                }

                <CustomSelect
                    handleChange={handleChange}
                    date={date}
                />
            </div>

            {
                internalSeminar ?
                    renderContent() :
                    <p className="text-center text-danger my-5">To see an event please select a date</p>
            }

        </>
    )
}
