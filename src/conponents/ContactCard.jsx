import React, { useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { RiEditCircleLine } from "react-icons/ri";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclous from "../hooks/useDisclouse";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {

  const {isOpen, onClose, onOpen} = useDisclous();


  const deleteContact = async (id) =>{
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted");
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
    <div
      key={contact.id}
      className=" flex items-center justify-between rounded-lg bg-yellow 
               p-2"
    >
      <div className="flex gap-1">
        <FaRegUserCircle className=" text-4xl text-[#F6820C]" />
        <div className="">
          <h2 className="text-medium">{contact.name}</h2>
          <p className="text-sm">{contact.email}</p>
        </div>
      </div>
      <div className="flex text-2xl">
        <RiEditCircleLine onClick={onOpen} className=" cursor-pointer"/>
        <MdOutlineDelete 
        onClick={() => deleteContact(contact.id)} 
        className=" cursor-pointer  text-orange" />
      </div>
    </div>
    <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
    </>
  );
};

export default ContactCard;
