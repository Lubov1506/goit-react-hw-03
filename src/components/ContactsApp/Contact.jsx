import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "../Button/Button";
import s from "./ContactsApp.module.css";
const Contact = ({ item: { name, number, id }, handleDelete }) => {
  return (
    <li className={s.card}>
      <div>
        <p>
          <FaUser />
          <span>{name}</span>
        </p>
        <p>
          <FaPhoneAlt />
          <span>{number}</span>
        </p>
      </div>
      <Button onClick={() => handleDelete(id)}>Delete</Button>
    </li>
  );
};

export default Contact;
