import img1 from '../assets/images/card-img-1.jpg'; 
import img2 from '../assets/images/card-img-2.jpg'; 
import img3 from '../assets/images/card-img-3.jpg'; 
import img4 from '../assets/images/card-img-4.jpg'; 
import { Card } from './Card';

export const Women = () => {
    return (
        <>

<section className="women" id="women">
    <div className="container women__container">
        <div className="women__text">
            <h2 className="women__title">WOMEN’S FASHION</h2>
            <h3 className="women__subtitle">Shop our new arrivals from established brands</h3>
        </div>
        <div className="women__cards">
        <Card 
            image={img1}
            title={'GREEN MUSCLE FIT POLO SHIRT'}
            price={'$229.00'}
            secondPrice={'$129.00'}
        />
        <Card 
            image={img2}
            title={'GREEN MUSCLE FIT POLO SHIRT'}
            price={'$229.00'}
            secondPrice={'$129.00'}
        />
        <Card 
            image={img3}
            title={'GREEN MUSCLE FIT POLO SHIRT'}
            price={'$229.00'}
            secondPrice={'$129.00'}
        />
        <Card 
            image={img4}
            title={'GREEN MUSCLE FIT POLO SHIRT'}
            price={'$229.00'}
            secondPrice={'$129.00'}
        />
        </div>
    </div>
</section>

        </>
    );
}