import { useState } from "react";

const AadhaarDownloadGuide = () => {
  const [lang, setLang] = useState("hi"); // hi | en

  const content = {
    hi: {
      title: "आधार कार्ड डाउनलोड",
      intro:
        "इस पेज पर आधार कार्ड डाउनलोड करने की पूरी जानकारी दी गई है। आधार डाउनलोड केवल UIDAI की आधिकारिक वेबसाइट से ही होता है।",
      requiredTitle: "आवश्यक जानकारी",
      required: [
        "आधार नंबर या VID",
        "पंजीकृत मोबाइल नंबर",
        "OTP प्राप्त करने के लिए मोबाइल",
      ],
      stepsTitle: "आधार डाउनलोड करने के चरण",
      steps: [
        "Official UIDAI Website पर क्लिक करें",
        "UIDAI पोर्टल नई टैब में खुलेगा",
        "आधार नंबर या VID दर्ज करें",
        "Captcha भरकर Send OTP पर क्लिक करें",
        "OTP verify करें",
        "Password protected PDF डाउनलोड करें",
      ],
      button: "UIDAI की Official Website पर जाएँ",
      notesTitle: "महत्वपूर्ण सूचना",
      notes: [
        "आधार PDF का पासवर्ड आपकी जन्मतिथि (DDMMYYYY) होती है",

        "डाउनलोड के बाद आप इस पेज पर वापस आ सकते हैं",
      ],
      disclaimer:
        "यह वेबसाइट केवल मार्गदर्शन प्रदान करती है। सभी आधार सेवाएँ UIDAI की आधिकारिक वेबसाइट पर ही पूरी होती हैं।",
    },

    en: {
      title: "Aadhaar Card Download",
      intro:
        "This page provides complete guidance for Aadhaar Card download. Aadhaar services are available only on the official UIDAI website.",
      requiredTitle: "Required Details",
      required: [
        "Aadhaar Number or VID",
        "Registered Mobile Number",
        "Mobile phone to receive OTP",
      ],
      stepsTitle: "Steps to Download Aadhaar",
      steps: [
        "Click on the Official UIDAI Website",
        "UIDAI portal will open in a new tab",
        "Enter Aadhaar Number or VID",
        "Fill Captcha and click Send OTP",
        "Verify OTP",
        "Download password-protected PDF",
      ],
      button: "Go to Official UIDAI Website",
      notesTitle: "Important Notes",
      notes: [
        "Aadhaar PDF password is Date of Birth (DDMMYYYY)",
        "You can return to this page after download",
      ],
      disclaimer:
        "Disclaimer: This website provides guidance only. All Aadhaar services are completed on the official UIDAI portal.",
    },
  };

  const data = content[lang];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Language Switch */}
      <div className="flex justify-end gap-3 mb-4">
        <button
          onClick={() => setLang("hi")}
          className={`px-4 py-1 rounded border ${
            lang === "hi" ? "bg-blue-600 text-white" : ""
          }`}
        >
          हिंदी
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-4 py-1 rounded border ${
            lang === "en" ? "bg-blue-600 text-white" : ""
          }`}
        >
          English
        </button>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-4">{data.title}</h1>

      <p className="text-gray-700 text-center mb-6">{data.intro}</p>

      {/* Required */}
      <div className="border rounded p-4 mb-6 bg-gray-50">
        <h2 className="text-lg font-semibold mb-2">{data.requiredTitle}</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {data.required.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Steps */}
      <div className="border rounded p-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">{data.stepsTitle}</h2>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700">
          {data.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>

      {/* Button */}
      <div className="text-center mb-6">
        <a
          href="https://myaadhaar.uidai.gov.in/genricDownloadAadhaar"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          {data.button}
        </a>
      </div>

      {/* Notes */}
      <div className="bg-yellow-50 border border-yellow-300 p-4 rounded">
        <h3 className="font-semibold mb-2">{data.notesTitle}</h3>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          {data.notes.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-gray-500 text-center mt-6">
        {data.disclaimer}
      </p>
    </div>
  );
};

export default AadhaarDownloadGuide;
