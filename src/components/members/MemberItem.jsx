import { Google } from 'react-bootstrap-icons';

export const MemberItem = ({ member }) => {

    const fadeDirection = (type) => type === 'researcher' ? 'fadeInLeft' : 'fadeInRight';

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
                        <div
                            className="col-auto animate__animated animate__slideInUp d-flex align-items-center text-contact"
                        >
                            <Google />
                            <span className="ms-2">{member.contact.email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
