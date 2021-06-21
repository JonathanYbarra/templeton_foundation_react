import { useState } from 'react';
import { SubNavbar } from '../../components/activities/SubNavbar';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import { TabPanel } from '../../components/activities/TabPanel';
import { MonthlySeminars } from '../../components/activities/MonthlySeminars';
import { InternationalWorkShop } from '../../components/activities/InternationalWorkShop';
import { TalksForAllPublic } from '../../components/activities/TalksForAllPublic';
import '../../styles/_components/activities.css';

export const Activities = () => {
    const theme = useTheme();

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    return (
        <div className="container-activities animate__animated animate__slideInDown">
            <div className="d-flex justify-content-center pt-5 mb-5">
                <h4>The activities organized by the group are divided into three groups</h4>
            </div>

            <div className="row minHeight-50">
                <div className="col-8 justify-content-center offset-2">
                    <div className="d-flex flex-column">
                        <SubNavbar
                            handleChange={handleChange}
                            value={value}
                        />

                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                        >
                            {
                                Array.from([0, 1, 2]).map(i =>
                                    <TabPanel
                                        value={value}
                                        index={i}
                                        dir={theme.direction}
                                        key={i}
                                    >
                                        {value === 0 && <MonthlySeminars />}

                                        {value === 1 && <InternationalWorkShop />}

                                        {value === 2 && <TalksForAllPublic />}

                                    </TabPanel>
                                )
                            }
                        </SwipeableViews>
                    </div>
                </div>
            </div>

        </div>
    )
}
