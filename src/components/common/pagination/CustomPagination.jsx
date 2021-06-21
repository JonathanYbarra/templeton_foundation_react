import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export const CustomPagination = ({ size, itemPerPage, setList }) => {

    const [pageSize, setPageSize] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const classes = useStyles();

    useEffect(() => {
        setPageSize(Math.round(size / itemPerPage));
        setList(currentPage, itemPerPage, setCurrentPage)
    }, []);

    return (
        <div className="d-flex justify-content-center mb-5 mt-5">
            <div className={classes.root}>
                <Pagination
                    count={pageSize}
                    color="primary"
                    page={currentPage}
                    onChange={(e, page) => setList(page, itemPerPage, setCurrentPage)}
                />
            </div>
        </div>
    );
}

