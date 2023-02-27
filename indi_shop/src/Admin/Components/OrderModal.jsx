const OrderModal = ({ description, image, price, qty, size, brand }) => {
  return (
    <div>
      <div className="main__prod__container">
        <div className="prod__desc">
          <div>
            <p
              style={{
                fontWeight: "bold",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                webkitLineClamp: "1" /* number of lines to show */,
                lineClamp: "1",
                webkitBoxOrient: "vertical",
              }}
            >
              {description}
            </p>
          </div>
          <div>
            <img src={image} alt="prod" />
          </div>

          <div className="prod__qty">
            <div>
              <b>Size:</b>
              {" " + size + " "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
