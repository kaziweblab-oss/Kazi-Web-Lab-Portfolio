import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { ContactInfo } from "../components/contact/contactInfo.section";
import { getContactsData } from "../../store/slices/contactSlices";
import GetInTouchSection from "../components/getInTouch.section";
import LoadingSpinner from "../../utils/loadingSpinner";

export const ContactPage = () => {
  const dispatch = useDispatch();

  const {
    data: contacts,
    loading,
    error,
  } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(getContactsData());
  }, [dispatch]);
  return (
    <>
      <div className=" flex flex-col gap-10">
        <GetInTouchSection />
        <div className="flex flex-col gap-10">
          {loading && <LoadingSpinner />}
          {error && <p className="text-center text-lg text-red-200">{error}</p>}
          {!error && !contacts.status && (
            <p className="text-center text-lg text-red-200">
              Somethings Went Wrong.
            </p>
          )}
          {contacts?.status && contacts?.data?.[0].length === 0 && (
            <p className="text-center text-lg text-red-200">
              No Contact Data Found.
            </p>
          )}
          {contacts.status && contacts?.data?.[0] && (
            <ContactInfo
              socials={contacts?.data?.[0]?.socials}
              contacts={contacts?.data?.[0]?.contacts}
            />
          )}
        </div>
      </div>
    </>
  );
};
