import { MemberItem } from './MemberItem';
import { CustomPagination } from '../common/pagination/CustomPagination';
import { useState } from 'react';
import uuid from 'react-uuid';

export const MembersList = ({ memberList }) => {

    const [members, setMembers] = useState([]);

    const setListMembers = (page_number, itemPerPage, setCurrentPage) => {
        const sliceInit = (page_number - 1) * itemPerPage;
        const sliceEnd = page_number * itemPerPage;
        setMembers(memberList.slice(sliceInit, sliceEnd));
        setCurrentPage(page_number);
    }

    return (
        <>
            <div className="row">
                {
                    members.map(member =>
                        <MemberItem member={member} key={uuid()} />
                    )
                }

                <CustomPagination
                    size={memberList.length}
                    itemPerPage={4}
                    setList={setListMembers}
                />
            </div>
        </>
    )
}
