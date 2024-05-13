export const Card = ({image, title, price, secondPrice}) => {
    return (
        <>


            <div className="card">
                <div className="card__img">
                    <img src={image} />
                </div>
                <div className="card__text">
                <p className="card__brand">igure</p>
                <h4 className="card__title">{title}</h4>
                <div className="price__content">
                <p className="price">{price}</p>
                <p className="price second">{secondPrice}</p>
                </div>
                </div>
                <div className="line"></div>
            </div>


        </>
    );
}