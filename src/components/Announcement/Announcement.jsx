import "./Announcement.css";
import { Package } from "lucide-react";

const Announcement = () => {
  return (
    <div className="announcement">
      <Package size={16} color="#faf9f6" strokeWidth={1.5} />
      <p>Free delivery on orders over €100</p>
    </div>
  );
};

export default Announcement;
