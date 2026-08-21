import "./ShopFeatures.css";
import { Truck, RotateCcw, LockKeyhole, Headphones } from "lucide-react";

const ShopFeatures = () => {
  return (
    <section className="shop-features">
      <div className="shop-features__feature">
        <Truck size={24} strokeWidth={1.5} />

        <h3 className="shop-features__title">Free Delivery</h3>

        <p className="shop-features__text">On orders over €100</p>
      </div>

      <div className="shop-features__feature">
        <RotateCcw size={24} strokeWidth={1.5} />

        <h3 className="shop-features__title">Easy Returns</h3>

        <p className="shop-features__text">Returns within 30 days</p>
      </div>

      <div className="shop-features__feature">
        <LockKeyhole size={24} strokeWidth={1.5} />

        <h3 className="shop-features__title">Secure Payment</h3>

        <p className="shop-features__text">Safe and protected checkout</p>
      </div>

      <div className="shop-features__feature">
        <Headphones size={24} strokeWidth={1.5} />

        <h3 className="shop-features__title">Customer Care</h3>

        <p className="shop-features__text">Here when you need us</p>
      </div>
    </section>
  );
};

export default ShopFeatures;
