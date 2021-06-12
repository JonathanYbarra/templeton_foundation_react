import { projectTextContentHeader } from '../../core/services/theProject';
import uuid from 'react-uuid';
import CarouselImages from '../../components/project/Carousel';
import '../../styles/_components/project.css';

export const TheProject = () => {

    return (
        <>
            <div className="content animate__animated animate__slideInDown">
                <div className="row">
                    <div className="col-12">
                        <div className="container">
                            <h1>{projectTextContentHeader.titleH1}</h1>

                            {
                                projectTextContentHeader.subtitleP.map(text =>
                                    <p key={uuid()}>{text}</p>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="container content-body">
            <div className="d-flex justify-content-center animate__animated animate__fadeInLeft mt-5">
                    <CarouselImages />
                </div>

                <div className="mt-5">
                    <div className="d-flex justify-content-center">
                        <h2>The Cosmological Origin of the Arrow of Time</h2>
                    </div>

                    {
                        projectTextContentHeader.textContextBody.map(text =>
                            <p key={uuid()} className="text-center">{text}</p>
                        )
                    }

                    <div className="d-flex justify-content-center mt-5">
                        <b>Project Leader:</b>
                        <p className="ms-2">Prof. Dr. Olimpia Lombardi</p>
                    </div>

                    <div className="d-flex justify-content-center">
                        <b>Project Co-Leader:</b>
                        <p className="ms-2">Dr. Sebastian Fortin</p>
                    </div>
                </div>
            </div>
        </>
    )
}