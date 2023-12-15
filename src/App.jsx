import React, { useEffect, useState } from "react";
import Navbar from "./conponents/Navbar";
import { FiSearch } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { FaRegUserCircle } from "react-icons/fa";
import { RiEditCircleLine } from "react-icons/ri";
import { MdOutlineDelete } from "react-icons/md";
import ContactCard from "./conponents/ContactCard";
import Modal from "./conponents/Modal";
import AddAndUpdateContact from "./conponents/AddAndUpdateContact";
import useDisclous from "./hooks/useDisclouse";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const {onClose, isOpen, onOpen}  = useDisclous();

  
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
      
        onSnapshot(contactsRef,(snapshot) =>{
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactList);
          return contactList             
        })
       
      } catch (error) {}
    };

    getContacts();
  }, []);

  const filterContacts = (e) =>{
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
      
        onSnapshot(contactsRef,(snapshot) =>{
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });

          const filteredContacts = contactList.filter(contact => 
            contact.name.toLowerCase().includes(value.toLowerCase())
            );


          setContacts(filteredContacts);
          return filteredContacts 
        });


  }

  return (
    <>
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />

      <div className=" relative mx-auto flex w-[361px] flex-grow items-center">
        <FiSearch className=" absolute ml-1 text-3xl text-white" />

        <input
        onChange={filterContacts}
          type="text"
          className=" h-10 flex-grow rounded-md border
       border-white bg-transparent pl-9
       text-white "
        />
        <FaCirclePlus
        onClick={onOpen}
          className="ml-2 cursor-pointer
       text-4xl text-white
        "
        />
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {contacts.map((contact) => {
          return <ContactCard contact={contact} key={contact.id} />;
        })}
      </div>
       </div>
       <AddAndUpdateContact isOpen={isOpen} onClose={onClose}/>
        <ToastContainer position="bottom-center"/>
        

    </>
  );
};

export default App;
