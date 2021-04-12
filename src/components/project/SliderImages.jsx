import uuid from 'react-uuid';
import { galleryImages } from '../../core/services/theProject';
import Carousel from 'react-elastic-carousel';
import "../../styles/_components/sliderCarousel.css";

export const SliderImages = () => {
    return (
        <div>
            <Carousel>
                {
                    galleryImages.map(item =>
                        <div key={uuid()} className='item-slider'>
                            <img
                                src={item.path}
                                alt="foto"
                            />
                        </div>
                    )
                }
            </Carousel>
        </div>
    )
}
