import { projectTextContentHeader } from '../../core/services/theProject';
import '../../styles/_components/project.css';
import uuid from 'react-uuid';
import Particles from 'react-particles-js';
import { particlesConfig } from '../../config/particlesConfig';
import { SliderImages } from '../../components/project/SliderImages';

export const TheProject = () => {

    return (
        <>
            <div style={{ position: 'absolute' }}>
                <Particles height="100vh" width="100vw" params={particlesConfig} />
            </div>
            <div className="content">
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

                        {/* wave */}
                        <svg
                            className="wave"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320">
                            <path
                                fill="#ffff"
                                fillOpacity="1" d="M0,192L48,176C96,160,192,128,288,117.3C384,107,480,117,576,144C672,171,768,213,864,197.3C960,181,1056,107,1152,106.7C1248,107,1344,181,1392,218.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            >
                            </path>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="container mt-1">

                <SliderImages />


                <div className="mt-5">


                    {
                        projectTextContentHeader.textContextBody.map(text =>
                            <p key={uuid()}>{text}</p>
                        )
                    }

                    <div className="d-flex">
                        <b>Project Leader:</b>
                        <p style={{ marginLeft: 8 }}>Prof. Dr. Olimpia Lombardi</p>
                    </div>

                    <div className="d-flex">
                        <b>Project Co-Leader:</b>
                        <p style={{ marginLeft: 8 }}>Dr. Sebastian Fortin</p>
                    </div>
                </div>
            </div>
        </>
    )
}