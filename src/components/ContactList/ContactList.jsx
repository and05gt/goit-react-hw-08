import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import style from "./ContactList.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import Loader from "../Loader/Loader";
import toast from "react-hot-toast";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  return (
    <div className={style.contactListWrapper}>
      {loading && <Loader />}
      {error && <h2>{error}</h2>}
      <ul className={style.contactList}>
        {contacts.map((contact) => {
          return (
            <li className={style.listItem} key={contact.id}>
              <Contact
                name={contact.name}
                number={contact.number}
                onDelete={() =>
                  dispatch(
                    deleteContact(contact.id),
                    toast.success("Contact successfully deleted!")
                  )
                }
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
