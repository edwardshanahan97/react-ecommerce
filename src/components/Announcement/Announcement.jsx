import "./Announcement.css";
import { Package } from "lucide-react";

const Announcement = () => {
  return (
    <div className="announcement">
      <p>Free delivery on orders over €100</p>

      <Package size={16} color="#faf9f6" strokeWidth={1.5} />
    </div>
  );
};

export default Announcement;
