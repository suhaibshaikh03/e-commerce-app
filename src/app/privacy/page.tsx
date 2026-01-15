import Link from "next/link";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <Link href="/login" className="inline-flex items-center text-gray-600 hover:text-gray-900 text-sm font-medium mb-8">
            ← Back to Login
          </Link>
        </div>
        
        <div className="bg-white shadow rounded-lg p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              At Suhaib&apos;s Mart, accessible from suhaibsmart.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Suhaib&apos;s Mart and how we use it.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Personal Data Collection</h2>
            <p className="text-gray-600 mb-4">
              When you register an account, place an order, or fill out a form on our site, we may collect personal identification information including but not limited to your name, email address, phone number, and billing/shipping addresses.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Non-Personal Data Collection</h2>
            <p className="text-gray-600 mb-4">
              We may collect non-personal identification information about you whenever you interact with our site. Non-personal identification information may include the browser name, the type of computer, and technical information about your means of connection to our site, such as the operating system and the Internet service providers utilized.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">How We Use Collected Information</h2>
            <p className="text-gray-600 mb-4">
              Suhaib&apos;s Mart may collect and use your personal information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li><span className="font-medium">To improve customer service:</span> Information helps us respond to customer service requests and support needs more efficiently.</li>
              <li><span className="font-medium">To personalize user experience:</span> We may use information in the aggregate to understand how our customers as a group use the services and resources provided on our site.</li>
              <li><span className="font-medium">To improve our site:</span> We may use feedback you provide to improve our products and services.</li>
              <li><span className="font-medium">To process transactions:</span> We may use the information to process purchases and payments.</li>
              <li><span className="font-medium">To send periodic emails:</span> We may use the email address to send updates and notifications.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Information Protection</h2>
            <p className="text-gray-600 mb-4">
              We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Sharing Personal Information</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or rent users&apos; personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-4">
              We have the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
            </p>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString(`en-US`, { year: `numeric`, month: `long`, day: `numeric` })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;