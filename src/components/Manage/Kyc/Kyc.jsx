import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveKycDocument } from "./kycSlice";
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

// Helper: convert base64 to blob URL
const base64ToBlobURL = (base64Data, contentType = 'image/jpeg') => {
  const byteCharacters = atob(base64Data.split(',')[1]);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);
    const byteNumbers = new Array(slice.length).fill().map((_, i) => slice.charCodeAt(i));
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return URL.createObjectURL(blob);
};

const Kyc = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedDoc, setSelectedDoc] = useState('');
  const [viewedDoc, setViewedDoc] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();

  // Access stored documents from Redux
  const documents = useSelector(state => state.kyc.documents);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelectDoc = (doc) => {
    setSelectedDoc(doc);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        dispatch(saveKycDocument({ type: selectedDoc, imageBase64: base64String }));
        toast.success('File uploaded');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChooseFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleViewDocument = (doc) => {
    if (viewedDoc === doc) {
      setViewedDoc('');
      setImageUrl('');
    } else {
      const base64 = documents[doc]?.imageBase64;
      if (base64) {
        const url = base64ToBlobURL(base64);
        setImageUrl(url);
        setViewedDoc(doc);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl); // Cleanup blob URL
      }
    };
  }, [imageUrl]);

  return (
    <div className="p-3 shadow-md mt-12 w-full">
      <div className="bg-green-100 text-green-800 px-4 py-2 rounded text-sm font-semibold mb-4">
        Note: An OTP will be sent to your AADHAAR linked mobile while submitting KYC.
      </div>

      <div className="bg-blue-100 rounded">
        <div className="flex justify-between items-center px-4 py-2 border-b">
          <h2 className="text-sm font-semibold text-gray-800">Add KYC</h2>
          <span
            className="text-teal-600 cursor-pointer text-lg font-bold"
            onClick={handleToggle}
          >
            {isOpen ? '–' : '+'}
          </span>
        </div>

        {isOpen && (
          <div className="py-6 text-center">
            <p className="uppercase text-gray-600 text-sm font-semibold mb-4">
              Click on KYC Document To Add
            </p>
            <div className="flex justify-center gap-4 mb-4">
              {['Bank', 'PAN', 'Passport'].map((doc) => {
                const isUploaded = documents[doc]?.isUploaded;
                return (
                  <button
                    key={doc}
                    onClick={() => handleSelectDoc(doc)}
                    className={`rounded-full px-4 py-1 text-sm font-semibold text-gray-800 ${
                      isUploaded ? 'bg-green-400' : 'bg-gray-300'
                    }`}
                  >
                    {doc}
                  </button>
                );
              })}
            </div>

            {selectedDoc && (
              <div className="mt-4 text-sm text-gray-700">
                <p className="mb-2">
                  You selected: <strong>{selectedDoc}</strong>
                </p>

                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                />

                <button
                  onClick={handleChooseFile}
                  className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
                >
                  Choose File
                </button>
              </div>
            )}

            {/* View Buttons */}
            <div className="mt-6 flex justify-center gap-4">
              {['Bank', 'PAN', 'Passport'].map((doc) => (
                <button
                  key={doc}
                  onClick={() => handleViewDocument(doc)}
                  className="bg-purple-600 text-white px-3 py-1 rounded text-xs"
                >
                  {viewedDoc === doc ? `Hide ${doc}` : `View ${doc}`}
                </button>
              ))}
            </div>

            {/* Image Preview */}
            {imageUrl && (
              <div className="mt-4">
                <p className="text-gray-600 text-sm mb-2">Preview of {viewedDoc}:</p>
                <img
                  src={imageUrl}
                  alt={`${viewedDoc} Document`}
                  className="mx-auto border max-h-64 rounded shadow"
                />
              </div>
            )}
          </div>
        )}
      </div>

      <ToastContainer position="top-right" autoClose={1000} />
    </div>
  );
};

export default Kyc;
