import { useEffect, useState } from 'react';
import { MemberItem } from '../../components/members/MemberItem';
import { team_members, text_title_member } from '../../core/services/members';
import uuid from 'react-uuid';
import '../../styles/_components/members.css';

export const Members = () => {

    const [activeTypeMember, setActiveTypeMember] = useState({
        researcher: null,
        students: null,
        all: null,
        nameType: null
    })

    useEffect(() => {
        setActiveTypeMember({ researcher: "active-type-members", nameType: 'researcher' })
    }, [])

    const toggleActive = (nameType) => {
        setActiveTypeMember({ [nameType]: "active-type-members", nameType })
    }


    return (
        <div className="mt-5">
            <div className="d-flex justify-content-center">
                <h1 className="pt-5 animate__animated animate__slideInUp">Our Team</h1>
            </div>

            <div className="container">

                <p className="text-center my-5 animate__animated animate__slideInDown">{text_title_member}</p>

                <div className="d-flex justify-content-end mb-2">
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <button
                            className={`btn ${activeTypeMember.researcher}`}
                            onClick={() => toggleActive('researcher')}
                        >
                            Researchers
                        </button>
                        <button
                            className={`btn ${activeTypeMember.students}`}
                            onClick={() => toggleActive('students')}
                        >
                            PHD students
                        </button>
                    </div>
                </div>

                <div className="row">
                    {
                        team_members.map(member =>
                            member.type === activeTypeMember.nameType &&
                            <MemberItem member={member} key={uuid()} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}
