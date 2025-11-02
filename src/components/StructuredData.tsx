import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    // LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "DNS Training North Vancouver - Eva Andersson",
      "description": "Prague School-certified Dynamic Neuromuscular Stabilization (DNS) training and rehabilitation. Expert injury rehabilitation, sports performance, and chronic pain management on The North Shore.",
      "url": window.location.origin,
      "telephone": "+1-604-926-4883",
      "email": "info@scandinavianclinic.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Suite 202 - 101 West 16th Street",
        "addressLocality": "North Vancouver",
        "addressRegion": "BC",
        "postalCode": "V7M 1T3",
        "addressCountry": "CA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "49.3172",
        "longitude": "-123.0748"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "North Vancouver"
        },
        {
          "@type": "City",
          "name": "West Vancouver"
        }
      ],
      "priceRange": "$$",
      "image": window.location.origin + "/assets/eva-andersson.png",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:00"
        }
      ],
      "founder": {
        "@type": "Person",
        "name": "Eva Andersson",
        "jobTitle": "DNS Certified Practitioner",
        "description": "DNS-certified practitioner trained by The Prague School. Doctor of Naprapathy with five years of post-secondary clinical education.",
        "alumniOf": [
          {
            "@type": "Organization",
            "name": "The Prague School of Rehabilitation and Manual Medicine"
          },
          {
            "@type": "Organization",
            "name": "Scandinavian College of Naprapathic Manual Medicine"
          }
        ]
      },
      "medicalSpecialty": [
        "Rehabilitation",
        "Sports Medicine",
        "Pain Management",
        "Physical Therapy"
      ],
      "availableService": [
        {
          "@type": "MedicalTherapy",
          "name": "Dynamic Neuromuscular Stabilization Training",
          "description": "DNS training using developmental kinesiology principles to improve movement patterns"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Injury Rehabilitation",
          "description": "Post-injury recovery and musculoskeletal rehabilitation using DNS methodology"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Sports Performance Enhancement",
          "description": "Athletic optimization through improved dynamic stability and movement efficiency"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Chronic Pain Management",
          "description": "Treatment for chronic back pain, neck dysfunction, and musculoskeletal pain"
        }
      ]
    };

    // FAQPage Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Dynamic Neuromuscular Stabilization (DNS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DNS is a rehabilitation and training approach developed by The Prague School that uses principles of developmental kinesiology to improve movement by correcting dysfunctional motor patterns. It focuses on retraining the central nervous system to activate optimal movement patterns learned in infancy through coordinated activation of deep core stabilizers."
          }
        },
        {
          "@type": "Question",
          "name": "Where is DNS training available in North Vancouver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DNS training is available at Scandinavian Clinic, Suite 202 - 101 West 16th Street, North Vancouver, BC V7M 1T3. Eva Andersson provides Prague School-certified DNS training for clients across The North Shore."
          }
        },
        {
          "@type": "Question",
          "name": "What conditions does DNS help with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DNS is effective for injury rehabilitation, chronic pain management (back pain, neck pain, shoulder dysfunction), sports performance enhancement, and movement quality improvement. It addresses root causes of dysfunction by retraining neuromuscular patterns."
          }
        },
        {
          "@type": "Question",
          "name": "What are Eva Andersson's qualifications?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eva Andersson is DNS-certified by The Prague School of Rehabilitation and Manual Medicine, founded by Prof. Pavel Kolar. She is also a Doctor of Naprapathy with five years of post-secondary training from the Scandinavian College of Naprapathic Manual Medicine."
          }
        }
      ]
    };

    // Inject schemas into head
    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(faqSchema);
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null;
};

export default StructuredData;