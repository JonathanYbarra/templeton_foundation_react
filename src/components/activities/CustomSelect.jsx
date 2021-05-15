import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { internalSeminars } from '../../core/services/activities';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export const CustomSelect = ({ handleChange, date }) => {
    const classes = useStyles();

    return (
        <FormControl className={classes.formControl}>
            <Select
                value={date}
                onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {
                    internalSeminars.map(internalSeminar =>
                        <MenuItem
                            value={internalSeminar.id}
                            key={internalSeminar.id}
                        >
                            {internalSeminar.date}
                        </MenuItem>
                    )
                }

            </Select>
            <FormHelperText>Select a date</FormHelperText>
        </FormControl>
    )
}
