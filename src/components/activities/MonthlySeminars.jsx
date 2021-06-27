import { useEffect, useState } from 'react';
import { monthlySeminars } from '../../core/services/activities';
import { CustomSelect } from './CustomSelect';

export const MonthlySeminars = () => {

    const [date, setDate] = useState('');
    const [internalSeminar, setInternalSeminar] = useState(null);

    useEffect(() => {
        findInternalSeminar();
    }, [internalSeminar, date]);

    const handleChange = ({ target }) => {
        setDate(target.value);
    };

    const findInternalSeminar = () => {
        setInternalSeminar(monthlySeminars.find(internal => internal.id === date));
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
                        <p className="d-flex align-items-center mr-2">
                            See the presentation in
                            <a href={internalSeminar.pdfPresentation} target="_blank" rel="noreferrer">
                                <span className="material-icons cursor-pointer">picture_as_pdf</span>
                            </a>
                        </p> :
                        <div></div>
                }

                <CustomSelect
                    handleChange={handleChange}
                    date={date}
                    options={monthlySeminars}
                    selectDate={true}
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
