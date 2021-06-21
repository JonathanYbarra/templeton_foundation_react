import { Google } from 'react-bootstrap-icons';

export const MemberItem = ({ member }) => {

    const fadeDirection = (type) => type === 'researcher' ? 'fadeInLeft' : 'fadeInRight';
    const { email, researchGate, orcid } = member.contact;

    return (
        <div
            className={`col-12 col-xl-6 animate__animated animate__${fadeDirection(member.type)}`}
        >
            <div className="card user-card">
                <div className="card-header">
                    <h5>{member.nameType}</h5>
                </div>

                <div className="card-block">
                    <div className="user-image">
                        <img src={member.photo_profil} alt={member.name} className="img-radius" />
                    </div>
                    <h6>{member.name}</h6>
                    <p className="text-muted">
                        {member.description}
                    </p>
                    <hr />

                    <div className="row justify-content-center user-social-link">
                        <div className="col-auto animate__animated animate__slideInUp">
                            {orcid && (
                                <div className="d-flex align-items-center">
                                    <a href={orcid} target="_blank" className="mini-orcid-icon" rel="noreferrer">
                                        <span></span>
                                    </a>
                                    <a href={orcid} className="ms-2 orcid-id-link" target="_blank" rel="noreferrer">
                                        {orcid}
                                    </a>
                                </div>
                            )}

                            {researchGate && (
                                <div className="d-flex align-items-center">
                                    <a href={researchGate} target="_blank" rel="noreferrer">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/ResearchGate_icon_SVG.svg/2048px-ResearchGate_icon_SVG.svg.png" alt="" className="icon-researchgate" />
                                    </a>
                                    <a href={researchGate} className="ms-2 orcid-id-link" target="_blank" rel="noreferrer">
                                        {researchGate}
                                    </a>
                                </div>
                            )}

                            {email && (
                                <div className="d-flex align-items-center text-contact">
                                    <Google />
                                    <span className="ms-2">{email}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
