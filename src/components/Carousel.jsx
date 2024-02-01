import { Carousel as Car } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner from "../assets/banner.png";

export function Carousel() {
    return (
        <Car showArrows={false} showThumbs={false} emulateTouch={true}>
            <div>
                <img src={banner} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={banner} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={banner} />
                <p className="legend">Legend 4</p>
            </div>
        </Car>
    );
}
