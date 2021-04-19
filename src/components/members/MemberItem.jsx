import { Facebook, Twitter, Google } from 'react-bootstrap-icons';

export const MemberItem = ({ member }) => {

    const fadeDirection = (type) => type === 'researcher' ? 'fadeInLeft' : 'fadeInRight';

    return (
        <div
            className={`col-12 col-xl-6 animate__animated animate__${fadeDirection(member.nameType)}`}
        >
            <div className="card user-card">
                <div className="card-header">
                    <h5>{member.nameType}</h5>
                </div>

                <div className="card-block">
                    <div className="user-image">
                        <img src={member.photo_profil} alt="img-radius" alt={member.name} />
                    </div>
                    <h6>{member.name}</h6>
                    <p className="text-muted">
                        {member.description}
                    </p>
                    <hr />

                    <div className="row justify-content-center user-social-link">
                        <div className="col-auto animate__animated animate__slideInUp">
                            <Facebook className="text-facebook" />
                        </div>
                        <div className="col-auto animate__animated animate__slideInDown">
                            <Twitter className="text-twitter" />
                        </div>
                        <div className="col-auto animate__animated animate__slideInUp">
                            <Google className="text-google" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
